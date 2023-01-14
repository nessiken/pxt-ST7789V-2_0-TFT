function DrawTermometer2 () {
    OLEDST7789.drawCircle(120, 40, 6, TFTColors.White)
    OLEDST7789.drawRectangle(115, 45, 12, 10, TFTColors.White)
    OLEDST7789.drawRectangle(115, 55, 12, 100, TFTColors.Red)
    OLEDST7789.drawCircle(120, 140, 18, TFTColors.Red)
}
function DrawTermometer3 () {
    OLEDST7789.drawRectangle(125, 65, 10, 5, TFTColors.White)
    OLEDST7789.drawRectangle(125, 85, 10, 5, TFTColors.White)
    OLEDST7789.drawRectangle(125, 105, 10, 5, TFTColors.White)
    OLEDST7789.drawCircle(126, 144, 3, TFTColors.White)
    OLEDST7789.drawCircle(128, 140, 3, TFTColors.White)
    OLEDST7789.drawCircle(126, 136, 3, TFTColors.White)
}
function ReadTemp () {
    OLEDST7789.showString("" + convertToText(input.temperature()), 30, 80, 5, TFTColors.DarkRed, TFTColors.White)
}
function DrawTermometer () {
    OLEDST7789.drawCircle(120, 40, 10, TFTColors.Blue)
    OLEDST7789.drawRectangle(111, 45, 20, 110, TFTColors.Blue)
    OLEDST7789.drawCircle(120, 140, 24, TFTColors.Blue)
}
let X = 0
let y = 0
let timedelay = 0
OLEDST7789.init(TFTColors.Black)
DrawTermometer()
DrawTermometer2()
DrawTermometer3()
OLEDST7789.drawRectangle(15, 70, 80, 45, TFTColors.DarkRed)
OLEDST7789.drawRectangle(18, 73, 74, 39, TFTColors.White)
OLEDST7789.showString("Micro:Bit", 30, 200, 4, TFTColors.NobelGrey, TFTColors.Black)
OLEDST7789.showString("Temp", 80, 230, 4, TFTColors.NobelGrey, TFTColors.Black)
loops.everyInterval(60000, function () {
    ReadTemp()
})
basic.forever(function () {
    timedelay = 100
    y = 100
    X = 160
    for (let index = 0; index < 5; index++) {
        OLEDST7789.drawPixel(X, y, TFTColors.White)
        X += 1
        basic.pause(timedelay)
        OLEDST7789.drawPixel(X, y, TFTColors.White)
        X += 1
        basic.pause(timedelay)
        OLEDST7789.drawPixel(X, y, TFTColors.White)
        X += 1
        basic.pause(timedelay)
        OLEDST7789.drawPixel(X, y, TFTColors.White)
        X += 1
        basic.pause(timedelay)
        OLEDST7789.drawPixel(X, y, TFTColors.White)
    }
    X = 160
    for (let index = 0; index < 5; index++) {
        OLEDST7789.drawPixel(X, y, TFTColors.Black)
        X += 1
        basic.pause(timedelay)
        OLEDST7789.drawPixel(X, y, TFTColors.Black)
        X += 1
        basic.pause(timedelay)
        OLEDST7789.drawPixel(X, y, TFTColors.Black)
        X += 1
        basic.pause(timedelay)
        OLEDST7789.drawPixel(X, y, TFTColors.Black)
        X += 1
        basic.pause(timedelay)
        OLEDST7789.drawPixel(X, y, TFTColors.Black)
    }
})