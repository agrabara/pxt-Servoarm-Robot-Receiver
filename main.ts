radio.onReceivedStringDeprecated(function (receivedString) {
    if (receivedString == "U") {
        if (debug) {
            led.plot(0, 0)
            led.plot(0, 1)
            led.plot(0, 2)
        }
        step1 = 5
    } else if (receivedString == "D") {
        if (debug) {
            led.plot(0, 2)
            led.plot(0, 3)
            led.plot(0, 4)
        }
        step1 = -5
    } else if (receivedString == "L") {
        if (debug) {
            led.plot(2, 2)
            led.plot(1, 2)
            led.plot(0, 2)
        }
        step0 = 5
    } else if (receivedString == "R") {
        if (debug) {
            led.plot(2, 2)
            led.plot(3, 2)
            led.plot(4, 2)
        }
        step0 = -5
    } else if (receivedString == "1") {
        if (debug) {
            led.plot(4, 0)
            led.plot(4, 1)
            led.plot(4, 2)
        }
        step2 = 5
    } else if (receivedString == "3") {
        if (debug) {
            led.plot(4, 2)
            led.plot(4, 3)
            led.plot(4, 4)
        }
        step2 = -5
    } else if (receivedString == "2") {
        if (debug) {
            led.plot(2, 0)
            led.plot(1, 0)
            led.plot(0, 0)
        }
        step3 = 5
    } else if (receivedString == "4") {
        if (debug) {
            led.plot(2, 0)
            led.plot(3, 0)
            led.plot(4, 0)
        }
        step3 = -5
    } else if (receivedString == "N") {
        step0 = 0
        step1 = 0
        step2 = 0
        step3 = 0
        if (debug) {
            led.unplot(0, 2)
            led.unplot(1, 2)
            led.unplot(2, 2)
            led.unplot(3, 2)
            led.unplot(4, 2)
            led.unplot(0, 0)
            led.unplot(0, 1)
            led.unplot(0, 3)
            led.unplot(0, 4)
            led.unplot(4, 0)
            led.unplot(4, 1)
            led.unplot(4, 3)
            led.unplot(4, 4)
            led.unplot(1, 0)
            led.unplot(2, 0)
            led.unplot(3, 0)
        }
    } else if (receivedString == "A") {
        if (debug) {
            basic.showString("A")
        }
    } else if (receivedString == "B") {
        if (debug) {
            basic.showString("B")
        }
    } else {
        if (debug) {
            basic.clearScreen()
        }
    }
})
let step3 = 0
let step2 = 0
let step0 = 0
let step1 = 0
let debug = false
debug = true
radio.setGroup(199)
let pos0 = 90
let pos1 = 40
let pos2 = 120
let pos3 = 180
Servo.Servo(0, pos0)
Servo.Servo(1, pos1)
Servo.Servo(2, pos2)
Servo.Servo(3, pos3)
basic.forever(function () {
    led.plotBrightness(2, 4, 16)
    if (step0 != 0) {
        pos0 += step0
        pos0 = Math.max(pos0, 0)
        pos0 = Math.min(pos0, 180)
        Servo.Servo(0, pos0)
    }
    if (step1 != 0) {
        pos1 += step1
        pos1 = Math.max(pos1, 40)
        pos1 = Math.min(pos1, 80)
        Servo.Servo(1, pos1)
    }
    if (step2 != 0) {
        pos2 += step2
        pos2 = Math.max(pos2, 120)
        pos2 = Math.min(pos2, 180)
        Servo.Servo(2, pos2)
    }
    if (step3 != 0) {
        pos3 += step3
        pos3 = Math.max(pos3, 155)
        pos3 = Math.min(pos3, 180)
        Servo.Servo(3, pos3)
    }
    basic.pause(30)
    led.unplot(2, 4)
})
 