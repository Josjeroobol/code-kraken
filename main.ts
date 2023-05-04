let start = 1
let code = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || (input.buttonIsPressed(Button.B) || input.logoIsPressed())) {
        start = 0
    }
})
basic.forever(function () {
    if (code == 0 && input.buttonIsPressed(Button.A)) {
        code = 1
    }
    if (code == 1 && input.buttonIsPressed(Button.B)) {
        code = 2
    }
    if (code == 2 && input.logoIsPressed()) {
        code = 3
    }
    if (code == 3 && input.buttonIsPressed(Button.A)) {
        code = 4
    }
    if (code == 4 && input.logoIsPressed()) {
        code = 5
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
    if (code == 3) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
    }
    if (code == 4) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    }
    if (code == 5) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(500)
        basic.showIcon(IconNames.Happy)
        basic.pause(10000)
    }
})
