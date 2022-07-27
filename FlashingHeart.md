# FlashingHeart
## First go to ``||basic.show icon||``,  drag the heart block to the forever loop.
```blocks 
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
```

## Next,1. Go to  ``||basic.showNumber||``,  drag the shownumber to the forever loop input, 2. drag the ``||input.temperature||`` and place it ontop of  0.
```blocks 
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showNumber(input.temperature())
})
```
## Finally, go to ``||basic.showLeds||``,  drag the show LED block to the forever loop.
Make a checkmark  in the array bubble. 
```blocks 
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

```

