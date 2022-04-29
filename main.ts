let pocitadlo = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(0)
})
input.onButtonPressed(Button.A, function () {
    pocitadlo = 5
    for (let index = 0; index <= pocitadlo; index++) {
        basic.showNumber(pocitadlo - index)
    }
    music.playMelody("C D E F G A B C5 ", 120)
})
basic.forever(function () {
	
})
