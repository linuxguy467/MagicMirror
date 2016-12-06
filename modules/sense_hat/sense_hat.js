/**
 * Created by mchemingway0031 on 11/30/2016.
 */

var python = require('python-shell');
var pyshell = require('scripts/__main__.py');

Module.register("sense-hat", {
    // default config for sense-hat module
    defaults: {
        text: "Temperature of Room",
        initialLoadDelay: 0,
        updateInterval: 2.5 * 60 * 1000 // every 10 minutes
    },

    // Define required scripts.
    getScripts: function() {
        return ["moment.js"];
    },

    // Define start sequence.
    start: function() {
        Log.info("Starting module: " + this.name);

        // Set locale.
        moment.locale(config.language);

        this.message = null;

        this.loaded = false;
        this.scheduleUpdate(this.config.initialLoadDelay);

        this.updateTimer = null;
    },
    getDom: function () {
        var wrapper = document.createElement("div");

        if (!this.loaded) {
            wrapper.innerHTML = this.translate('LOADING');
            wrapper.className = "dimmed light small";
            return wrapper;
        }

        var large = document.createElement("div");
        large.className = "large light";

        var text = document.createElement("span");
        text.className = "bright";
        text.innerHTML = " " + this.text;
        large.appendChild(text);

        var temperature = document.createElement("span");
        temperature.className = "bright";
        temperature.innerHTML = " " + this.message + "&deg;";
        large.appendChild(temperature);

        return wrapper;
    },
    runScript: function () {
        this.message = pyshell.on('message', function (message) {
            return message;
        });

        if(this.message = ""){
            self.stopScript();
        }

        this.loaded = true;
        this.updateDom(this.config.animationSpeed);
    },

    updateTemp: function () {
        var self = this;
        var retry = true;

        self.runScript()
    },

    stopScript: function () {
        pyshell.end(function (err) {
            if (err) throw err;
            Log.log('finished');
        });
    },
    /* scheduleUpdate()
     * Schedule next update.
     *
     * argument delay number - Milliseconds before next update. If empty, this.config.updateInterval is used.
     */
    scheduleUpdate: function(delay) {
        var nextLoad = this.config.updateInterval;
        if (typeof delay !== "undefined" && delay >= 0) {
            nextLoad = delay;
        }

        var self = this;
        setTimeout(function() {
            self.updateTemp();
        }, nextLoad);
    },
});
