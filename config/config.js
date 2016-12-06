/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
    port: 8080,

    language: 'en',
    timeFormat: 12,
    units: 'metric',

    modules: [
        {
            module: 'alert',
        },
        {
            module: 'clock',
            position: 'top_left'
        },
        {
            module: 'calendar',
            header: 'US Holidays',
            position: 'top_left',
            config: {
                calendars: [
                    {
                        symbol: 'calendar-check-o ',
                        url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
                    }
                ]
            }
        },
        {
            module: 'compliments',
            position: 'lower_third'
        },
        {
            module: 'currentweather',
            position: 'top_right',
            config: {
                location: 'North Fort Myers',
                locationID: '4166195',  //ID from http://www.openweathermap.org
                appid: '29c478d6b5006685911bc317568c1461',
                units: 'imperial',
                updateInterval: 180000,
                timeFormat: 12
            }
        },
        {
            module: 'weatherforecast',
            position: 'top_right',
            header: 'Weather Forecast',
            config: {
                location: 'North Fort Myers',
                locationID: '4166195',  //ID from http://www.openweathermap.org
                appid: '29c478d6b5006685911bc317568c1461',
                units: 'imperial',
                updateInterval: 180000
            }
        },
        {
            module: 'newsfeed',
            position: 'bottom_bar',
            config: {
                feeds: [
                    {
                        title: "New York Times",
                        url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
                    }
                ],
                showSourceTitle: true,
                showPublishDate: true
            }
        },
        {
            module: 'sense-hat',
            position: 'lower_second'
        }
    ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}