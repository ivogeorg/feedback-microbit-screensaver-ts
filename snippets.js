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

basic.forever(function () {});

basic.forever(function () {});

basic.forever(function () {});

basic.forever(function () {});

// SNIPPET 3
// drawing-style programming

// TODO
