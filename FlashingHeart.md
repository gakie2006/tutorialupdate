# FlashingHeart
## First go to basic,  dragg the heart block to the forever loop.
```blocks 
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
```

## Next,1. Go to  basic,  dragg the shownumber to the forever loop input, 2. dragg the temperature bobble and place it ontop of  0.
```blocks 
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showNumber(input.temperature())
})
```
## Finally, go to basic,  dragg the show LED block to the forever loop.
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

