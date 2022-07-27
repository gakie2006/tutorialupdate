basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showNumber(input.temperature())
    basic.showLeds(`
        . . . . #
        # . . # .
        # . # . .
        # # . . .
        # . . . .
        `)
})
