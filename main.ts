let start = 1
let code = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || (input.buttonIsPressed(Button.B) || input.logoIsPressed())) {
        start = 0
    }
})
basic.forever(function () {
    if (code == 0) {
        basic.showString("C")
    }
    if (code == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    if (code == 2) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
})
basic.forever(function () {
    if (code == 0 && input.buttonIsPressed(Button.A)) {
        code = 1
    }
    if (code == 1 && input.buttonIsPressed(Button.B)) {
        code = 2
    }
})
