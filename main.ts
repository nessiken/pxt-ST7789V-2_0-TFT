//----------------------------------------------------------------------------------------------------
// Colors RGB556.  I used https://htmlcolorcodes.com/ and Lucas Software to make colors.
// Link to  Lucas page "thanks Lucas :-)"
// https://www.lucasgaland.com/24-bit-16-bit-color-converter-tool-for-embedded-lcd-guis/
//
//---------------------------------------------------------------------------------------------------
enum TFTColors {
   /*% block="Black"            0 */          Black = 0x0000,
   /*% block="Aquamarine"       1 */     Aquamarine = 0x7FFA,
   /*% block="Amber"            2 */          Amber = 0xFDE0,
   /*% block="PastelBlue"       3 */     PastelBlue = 0x85DB,
   /*% block="Blue"             4 */           Blue = 0x001F,
   /*% block="NeonBlue"         5 */       NeonBlue = 0x625F,
   /*% block="DarkBrown"        6 */      DarkBrown = 0x6244,
   /*% block="Navy"             7 */           Navy = 0x000F,
   /*% block="Maroon"           8 */         Maroon = 0x7800,
   /*% block="Purple"           9 */         Purple = 0x780F,
   /*% block="ElectricIndigo"  10 */ ElectricIndigo = 0x781F,
   /*% block="LightGrey"       11 */      LightGrey = 0xC618,
   /*% block="NobelGrey"       12 */      NobelGrey = 0x9CD3,
   /*% block="DarkGrey"        13 */       DarkGrey = 0x7BEF,
   /*% block="Mint"            14 */           Mint = 0xC6D6,
   /*% block="Green"           15 */          Green = 0x07E0,
   /*%block="BilobaFlower"     16 */   BilobaFlower = 0xACFF,
   /*% block="GreenYellow"     17 */    GreenYellow = 0xAFE5,
   /*% block="DarkGreen"       18 */      DarkGreen = 0x03E0,
   /*% block="Olive"           19 */          Olive = 0x7BE0,
   /*% block="DarkCyan"        20 */       DarkCyan = 0x03EF,
   /*% block="DodgerBlue"      21 */     DodgerBlue = 0x03FF,
   /*% block="Cyan"            22 */           Cyan = 0x07FF,
   /*% block="Ruby"            23 */           Ruby = 0xE0AE,
   /*% block="Red"             24 */            Red = 0xF800,
   /*% block="Bright Pink"     25 */     BrightPink = 0xF810,
   /*% block="Magenta"         26 */        Magenta = 0xF81F,
   /*% block="DarkRed"         27 */        DarkRed = 0xA800,
   /*% block="Yellow"          28 */         Yellow = 0xFFE0,
   /*% block="White"           29 */          White = 0xFFFF,
   /*% block="Gold"            30 */           Gold = 0xFD40,
   /*% block="Orange"          31 */         Orange = 0xFC00,
   /*% block="Wewak"           32 */          Wewak = 0xFCF4,
   /*% block="DarkSalamon"     33 */    DarkSalamon = 0xE4AF,
   /*% block="Pink"            34 */           Pink = 0xF8B2

}// END COLORS

//----------------------------------------------------------------------------------------------------
//                      ST7789OLED_Block 
//---------------------------------------------------------------------
//% color="#649bd9" icon="\uf26c" weight=95 block="OLED-TFT20-ST7789"
namespace OLEDST7789 {
    // Display commands & constants
    let TFTWIDTH = 240
    let TFTHEIGHT = 320
    let TFTDC = [DigitalPin.P8]// TFT Data/Command pin 8  
    let TFTCS = [DigitalPin.P16]// TFT SPI Chip Select pin 16 
    //---------------------------------------------------------------------------------------------------------------------
    //                  TFT ST7789V Commands (not all used)
    //---------------------------------------------------------------------------------------------------------------------
    enum TFTCommands {
        NOP = 0x00, // No Operation
        SWRESET = 0x01, // Software Reset
        // SLPIN = 0x10, // Sleep in
        SLPOUT = 0x11, // Sleep Out
        // PTLON = 0x12, // Partial Display Mode On
        NORON = 0x13, // Normal Display Mode On
        INVOFF = 0x20, // Display Inversion Off
        INVON = 0x21, // Display Inversion On
        //GAMSET = 0x26, // Gamma Set
        DISPOFF = 0x28, // Display Off
        DISPON = 0x29, // Display On
        CASET = 0x2A, // Column Address Set
        RASET = 0x2B, // Row Address Set
        RAMWR = 0x2C, // Memory Write
        RAMRD = 0x2E, // Memory Read
        //PTLAR = 0x30, // Partial Area
        //VSCRDEF = 0x33, // Vertical Scrolling Definition
        //TEOFF = 0x34, // Tearing Effect Line Off
        // TEON = 0x35, // Tearing Effect Line On
        MADCTL = 0x36, // Memory Data Access Control
        //VSCSAD = 0x37, // Vertical Scroll Start Address of RAM
        //IDMOFF = 0x38, // Idle Mode Off
        //IDMON = 0x39, // Idle Mode On
        COLMOD = 0x3A, // Interface Pixel Format
        // WRMEMC = 0x3C, // Write Memory Continue
        //RDMEMC = 0x3E, // Read Memory Continue
        // MADCTL_RGB = 0x00 RGB Order
        // MADCTL_BGR = 0x08 BGR Order
        // MADCTL_MY = 0x80 Page Address Order
        // MADCTL_MX = 0x40 Column Address Order 
        // MADCTL_MV = 0x20 Page/Column Order -  
        // MADCTL_ML = 0x10 Line Address Order                                  
        // MADCTL_MH = 0x04 Display Data Latch Order    
    }// END TFT ST7789V Commands

    //---------------------------------------------------------------------------------------------------------------------
    // Unicode representation   FONTS
    // The unicode table is split into seven parts because of 
    // memory size and array size limitations of the microbit
    //---------------------------------------------------------------------------------------------------------------------
    let fontOne: number[] = [0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422,
        0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422,
        0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422,
        0x0022d422, 0x0022d422];
    let fontTwo: number[] = [0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422,
        0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422,
        0x00000000, 0x000002e0, 0x00018060, 0x00afabea, 0x00aed6ea, 0x01991133,
        0x010556aa, 0x00000060];
    let fontThree: number[] = [0x000045c0, 0x00003a20, 0x00051140, 0x00023880, 0x00002200, 0x00021080,
        0x00000100, 0x00111110, 0x0007462e, 0x00087e40, 0x000956b9, 0x0005d629,
        0x008fa54c, 0x009ad6b7, 0x008ada88, 0x00119531, 0x00aad6aa, 0x0022b6a2,
        0x00000140, 0x00002a00];
    let fontFour: number[] = [0x0008a880, 0x00052940, 0x00022a20, 0x0022d422, 0x00e4d62e, 0x000f14be,
        0x000556bf, 0x0008c62e, 0x0007463f, 0x0008d6bf, 0x000094bf, 0x00cac62e,
        0x000f909f, 0x000047f1, 0x0017c629, 0x0008a89f, 0x0008421f, 0x01f1105f,
        0x01f4105f, 0x0007462e];
    let fontFive: number[] = [0x000114bf, 0x000b6526, 0x010514bf, 0x0004d6b2, 0x0010fc21, 0x0007c20f,
        0x00744107, 0x01f4111f, 0x000d909b, 0x00117041, 0x0008ceb9, 0x0008c7e0,
        0x01041041, 0x000fc620, 0x00010440, 0x01084210, 0x00000820, 0x010f4a4c,
        0x0004529f, 0x00094a4c];
    let fontSix: number[] = [0x000fd288, 0x000956ae, 0x000097c4, 0x0007d6a2, 0x000c109f, 0x000003a0,
        0x0006c200, 0x0008289f, 0x000841e0, 0x01e1105e, 0x000e085e, 0x00064a4c,
        0x0002295e, 0x000f2944, 0x0001085c, 0x00012a90, 0x010a51e0, 0x010f420e,
        0x00644106, 0x01e8221e];
    let fontSeven: number[] = [0x00093192, 0x00222292, 0x00095b52, 0x0008fc80, 0x000003e0, 0x000013f1,
        0x00841080, 0x0022d422];

    //---------------------------------------------------------------------------------------------------------------------
    //                     Send command to display
    //---------------------------------------------------------------------------------------------------------------------
    function send(command: TFTCommands, parameter: Array<number>): void {
        pins.digitalWritePin(TFTDC[0], 0) // Set TFT to command-receive mode 
        pins.digitalWritePin(TFTCS[0], 0) // Select TFT controller   
        pins.spiWrite(command)            // Send command 
        pins.digitalWritePin(TFTDC[0], 1) // Set TFT back to data-receive mode  
        for (let item of parameter) { pins.spiWrite(item) } // Write data to TFT
        pins.digitalWritePin(TFTCS[0], 1) // Deselect TFT controller
    }// END  Send command to display

    //-------------------------------------------------------------------------------------------------------------------
    //       Set pixel address window - minimum and maximum pixel bounds
    //-------------------------------------------------------------------------------------------------------------------
    function setWindow(x0: number, y0: number, x1: number, y1: number): void {

        send(TFTCommands.CASET, [x0 >> 8, x0 & 0xFF, x1 >> 8, x1 & 0xFF]) // Colum setup   ↓
        send(TFTCommands.RASET, [y0 >> 8, y0 & 0xFF, y1 >> 8, y1 & 0xFF]) // Row Setup              ->
    }// END Set pixel address window

    //--------------------------------------------------------------------------------------------------------------------    
    //         Data-Mode to transfer data to TFT for further processing
    //--------------------------------------------------------------------------------------------------------------------      
    function enterDataMode(): void {
        pins.digitalWritePin(TFTDC[0], 0) // Activate command mode
        pins.digitalWritePin(TFTCS[0], 0) // select TFT as SPI-target
        pins.spiWrite(TFTCommands.RAMWR)  // Wirte data to TFT
        pins.digitalWritePin(TFTDC[0], 1) // Activate data mode
    }// END  Data-Mode to transfer data to TFT for further processing

    //--------------------------------------------------------------------------------------------------------------------    
    //           Finish data-mode and set back to command-mode
    //--------------------------------------------------------------------------------------------------------------------      
    function exitDataMode(): void {
        pins.digitalWritePin(TFTCS[0], 1) // de-elect the TFT as SPI target
        pins.digitalWritePin(TFTDC[0], 0) // command/data = command
    } // END Finish data-mode and set back to command-mode
    //--------------------------------------------------------------------------------------------------------------------    
    //                       Initial TFT setup
    //--------------------------------------------------------------------------------------------------------------------      

    //% block="Initialize TFT -> Backgrund color -> %TFTColor"
    //% weight=100
    export function init(color: TFTColors): void {

        // set SPI frequency
        pins.spiFrequency(10000000)
        //    1 Software reset
        send(TFTCommands.SWRESET, [])
        basic.pause(150)
        //    2 Exit Sleep mode
        send(TFTCommands.SLPOUT, [])
        basic.pause(10)
        //    3 Set 16-bit color mode
        send(TFTCommands.COLMOD, [0x05]) // 0x05 = 16BIT                                     
        basic.pause(10)
        //    4 Memory access control
        send(TFTCommands.MADCTL, [0x00])
        //    5 Column address set
        send(TFTCommands.CASET, [0x00, 0, TFTWIDTH >> 8, TFTWIDTH & 0xFF])
        //    6 Row address set
        send(TFTCommands.RASET, [0x00, 0, TFTHEIGHT >> 8, TFTHEIGHT & 0xFF])
        //    7 Disable inversion
        send(TFTCommands.INVON, [])
        basic.pause(10)
        //    8 Set normal mode
        send(TFTCommands.NORON, [])
        basic.pause(10)
        send(TFTCommands.SLPOUT, [])
        //    9 Turn display on
        send(TFTCommands.DISPON, [])
        basic.pause(10)

        clearScreen(color)
    }// ENDInitial TFT setup

    //---------------------------------------------------------------------------------------------------------------------     
    //                      Draw single pixel
    //---------------------------------------------------------------------------------------------------------------------      

    //% block="Draw single pixel x:%x|y:%y color:$TFTcolors"
    //% inlineInputMode=inline
    //% x.min=1 x.max=240
    //% y.min=1 y.max=320
    //% weight=90
    export function drawPixel(x: number, y: number, TFTcolors: TFTColors): void {
        setWindow(x, y, x + 1, y + 1)
        send(TFTCommands.RAMWR, [TFTcolors >> 8, TFTcolors])
    }// Draw single pixel

    //-------------------------------------------------------------------------------------------------------------------- 
    //                      Draw a straight line from one point to another
    //--------------------------------------------------------------------------------------------------------------------      
    //% block="Draw line from x0:%x0|y0:%y0 to x1:%x1|y1:%y1 with color:%TFTColors"
    //% inlineInputMode=inline
    //% x0.min=1 x0.max=240
    //% y0.min=1 y0.max=320
    //% x1.min=1 x1.max=240
    //% y1.min=1 y1.max=320
    //% weight=85
    export function drawLine(x0: number, y0: number, x1: number, y1: number, color: TFTColors): void {
        let xDelta = x1 - x0
        let yDelta = y1 - y0

        if (Math.abs(yDelta) > Math.abs(xDelta)) {
            let ySteps = Math.abs(yDelta)
            let xIncrement = xDelta == 0 ? 0 : xDelta / ySteps
            let yIncrement = yDelta > 0 ? 1 : -1

            let x = x0
            let y = y0
            for (let steps = 0; steps <= ySteps; steps++) {
                drawPixel(x, y, color)
            }
        }
        else {
            let xSteps = Math.abs(xDelta)
            let yIncrement = yDelta == 0 ? 0 : yDelta / xSteps
            let xIncrement = xDelta > 0 ? 1 : -1

            let y = y0
            let x = x0
            for (let steps = 0; steps <= xSteps; steps++) {
                drawPixel(x, y, color)
                y = y + yIncrement
                x = x + xIncrement
            }
        }
    }// END Draw a straight line from one point to another

    //---------------------------------------------------------------------------------------------------------------------
    //               Draw rectangle with a given color
    //---------------------------------------------------------------------------------------------------------------------
    //% block="Draw rectangle at x = %x  y = %y with width = %width  height = %height color = %TFTColors"
    //% inlineInputMode=inline
    //% x.min=1 x.max=240
    //% y.min=1 y.max=320
    //% width.min=1 width.max=240
    //% height.min=1 height.max=320
    //% weight=80
    export function drawRectangle(x: number, y: number, width: number, height: number, color: TFTColors): void {

        // Convert color
        let hiColor = (color >> 8) % 256
        let loColor = color % 256

        setWindow(x, y, (x + width - 1), (y + height - 1))
        enterDataMode()

        // Draw rectangle
        for (let indexY = 0; indexY < height; indexY++) {
            for (let indexX = 0; indexX < width; indexX++) {
                pins.spiWrite(hiColor);
                pins.spiWrite(loColor);
            }
        }
        exitDataMode()
    }
    //--------------------------------------------------------------------------------------------------------------------
    //                   Draw circle with a given radius
    //--------------------------------------------------------------------------------------------------------------------
    //% block="Draw circle at: x:%x|y:%y with radius:%r|color:%TFTColors"
    //% inlineInputMode=inline
    //% x.min=1 x.max=240
    //% y.min=1 y.max=320
    //% radius.min=1 radius.max=200
    //% weight = 75
    export function drawCircle(x: number, y: number, radius: number, color: TFTColors): void {
        for (let y1 = -radius; y1 <= 0; y1++) {
            for (let x1 = -radius; x1 <= 0; x1++) {
                if ((x1 * x1 + y1 * y1) <= (radius * radius)) {
                    drawPixel(x + x1, y + y1, color)
                    drawPixel(x + x1, y - y1, color)
                    drawPixel(x - x1, y + y1, color)
                    drawPixel(x - x1, y - y1, color)
                }
            }
        }
    }// END Draw circle with a given radius

    //--------------------------------------------------------------------------------------------------------------------
    //           Display string at given coordinates
    //--------------------------------------------------------------------------------------------------------------------
    //% block="Show string:%string at x:%x and y:%y with zoom-level:%zoom color:%TFTColors and background color:%bgcolor" 
    //% inlineInputMode=inline
    //% weight=70
    //% x.min=1 x.max=240
    //% y.min=1 y.max=320
    //% zoom.min=1 zoom.max=5
    export function showString(text: string, x: number, y: number, zoom: number, color: TFTColors, bgColor: TFTColors): void {
        let hiColor = (color >> 8) % 256
        let loColor = color % 256
        let bgHiColor = (bgColor >> 8) % 256
        let bgLoColor = bgColor % 256
        let zoomFactor = zoom
        let index = 0
        let colsel = 0
        let unicode = 0
        let charIndex = 0

        for (let stringPos = 0; stringPos < text.length; stringPos++) {
            // Get character at current string position and find the corresponding unicode representation
            charIndex = text.charCodeAt(stringPos)
            if (charIndex < 20) {
                unicode = fontOne[charIndex]
            }
            else if (charIndex < 40) {
                unicode = fontTwo[charIndex - 20]
            }
            else if (charIndex < 60) {
                unicode = fontThree[charIndex - 40]
            }
            else if (charIndex < 80) {
                unicode = fontFour[charIndex - 60]
            }
            else if (charIndex < 100) {
                unicode = fontFive[charIndex - 80]
            }
            else if (charIndex < 120) {
                unicode = fontSix[charIndex - 100]
            }
            else if (charIndex < 140) {
                unicode = fontSeven[charIndex - 120]
            }

            // Set position and go into data mode
            setWindow(x + stringPos * 5 * zoomFactor, y, x + stringPos * 5 * zoomFactor + 5 * zoomFactor - 1, y + 5 * zoomFactor - 1)
            enterDataMode()

            // write character to display
            for (let indexY = 0; indexY < 5; indexY++) {
                for (let a = 0; a < zoomFactor; a++) {
                    for (let indexX = 0; indexX < 5; indexX++) {
                        index = indexY + indexX * 5
                        colsel = (unicode & (1 << index))
                        for (let b = 0; b < zoomFactor; b++) {
                            if (colsel) {
                                pins.spiWrite(hiColor);
                                pins.spiWrite(loColor);
                            }
                            else {
                                pins.spiWrite(bgHiColor);
                                pins.spiWrite(bgLoColor);
                            }
                        }
                    }
                }
            }// END write character to display

            exitDataMode();

        }// END for let stringPos 

    }// END Display string at given coordinates

    //--------------------------------------------------------------------------------------------------------------
    //          CLEAR SCREEN
    //--------------------------------------------------------------------------------------------------------------
    //% block="Clear screen with color:%TFTColors"
    //% weight=65
    export function clearScreen(color: TFTColors): void {
        drawRectangle(0, 0, 240, 320, color)
    }// END Clear screen

    //---------------------------------------------------------------------------------------------------------------------
    //               TURN OFF TFT
    //---------------------------------------------------------------------------------------------------------------------
    //% block="Turn display off"
    //% weight=60
    export function turnOff(): void {
        send(TFTCommands.DISPOFF, [])
    }// END Turn off tft

    //---------------------------------------------------------------------------------------------------------------------
    //               TURN ON TFT
    //---------------------------------------------------------------------------------------------------------------------
    //% block="Turn display on"
    //% weight=55
    export function turnOn(): void {
        send(TFTCommands.DISPON, [])
    }// END Turn on tft

} // END Namespace OLEDST7789
  //---------------------------------------------------------------------------------------------




