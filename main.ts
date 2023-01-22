input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showIcon(IconNames.House)
})
