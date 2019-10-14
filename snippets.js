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
