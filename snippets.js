// SNIPPET 1
// checking for a gesture in a while loop

while (input.isGesture(Gesture.Shake)) {
    basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
}


// SNIPPET 2
// multiple mutually exclusive functions in forever loops

basic.forever(function () { if (game.score() == 1) {} });
basic.forever(function () { if (game.score() == 2) {} });
basic.forever(function () { if (game.score() == 3) {} });
basic.forever(function () { if (game.score() == 4) {} });


// SNIPPET 3
// drawing-style programming

// TODO

// SNIPPET 4
// too many nested whiles
basic.forever(function () {
    while (isSleeping) {
        if (input.isGesture(Gesture.TiltLeft)) {
            basic.clearScreen()
            screenSaver1()
        } else if (input.isGesture(Gesture.Shake)) {
            basic.clearScreen()
            screenSaver2()
        } else if (input.isGesture(Gesture.TiltRight)) {
            basic.clearScreen()
            screenSaver3()
        } else if (input.isGesture(Gesture.LogoDown)) {
            basic.clearScreen()
            screenSaver4()
        } else {
            basic.clearScreen()
            screenSaver5()
        }
    }
    while (!isSleeping) {
        basic.clearScreen()
        basic.showString("I am not sleeping!")
    }
})
