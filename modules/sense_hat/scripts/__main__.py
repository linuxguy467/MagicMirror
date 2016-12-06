## Sense HAT temperature reading python script
## for Smart Mirror Project
##
## Author: Matthew Hemingway
##

## Libraries used:
## SenseHat to communicate with the Sense HAT
## sys to exit program after KeyboardInterrupt (when
## Ctrl-C key command is executed)
## time to use sleep() to delay for 2.5 mins 

import sys
from sense_hat import SenseHat
import time
import pygame

sense = SenseHat()

#initialize connection with Sense HAT and
#load the siren mp3 file
def init():
    pygame.mixer.init()
    pygame.mixer.music.load("Siren_Noise.mp3")

#main method
def main():
    init()
   #attempt to run function 
    try:
        t = sense.get_temperature() - 10.5

        if t > 31:
            pygame.mixer.music.play()
            time.sleep(20)
            pygame.mixer.music.stop()

        t_f = 9/5 * t + 32
        t_f = int(t_f)

        msg = "{0}".format(t_f)

        print (msg)
    #Handle Keyboard Interrupt (testing only)
    except KeyboardInterrupt:
        sys.exit(0)

#start main method
if __name__ == "__main__":
    main()
