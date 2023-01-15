# MakeCode Package for the OLEDST7789 ( GMT020-01 2.0" 240x320 TFT Display).

This library provides a Microsoft Makecode package for the GMT020-01 2.0" 240x320 module.
> Open this page at [https://nessiken.github.io/pxt-st7789v-2_0-tft/](https://nessiken.github.io/pxt-st7789v-2_0-tft/)

## Use as Extension
This repository can be added as an **extension** in MakeCode.
* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/nessiken/pxt-st7789v-2_0-tft** and import

## Edit this project ![Build status badge](https://github.com/nessiken/pxt-st7789v-2_0-tft/workflows/MakeCode/badge.svg)


To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/nessiken/pxt-st7789v-2_0-tft** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/nessiken/pxt-st7789v-2_0-tft/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.Nessiken }}/{{ site.github.pxt-ST7789V-2_0-TFT}}");</script>


## Draw a line
lines can be drawn across the screen (horizontal, vertical and diagonal). The function takes five values: The x and y coordinates of the starting point, the x and y coordinates of the ending point and the color for the line.

```typescript
// Draw a straight White line
 OLEDST7789.drawLine(0, 0, 100, 100, TFTColors.White)
```

## Rectangles
Rectangles can be drawn on the screen. The function takes four five values: The x and y coordinate of the rectangles origin, the width of the rectangle, the height of the rectangle and the color for the rectangle.

```typescript
// Draw a Cyan rectangle in center
 OLEDST7789.drawRectangle(70, 110, 100, 100, TFTColors.Cyan)
```

## Circles
Circles can be drawn on the screen as well. Depending on the size of the circle, the drawing process can take a little more time than drawing straight lines or rectangles. The function takes four values: The x and y coordinate (center point) of the circle, the radius and the color of the circle.

```typescript
// Draw a Wewak(pink ìsh) circle
OLEDST7789.drawCircle(50, 50, 50, Color.Wewak)
```

## Show text
You can also show text on the display. The font size can be set in 5 different zoom levels (1-5). You can specify the font color as well as the background color. The function takes six arguments: The string, the x and y coordinates of the starting point, the zoom level, the text color and the background color.

```typescript
// Show white text with black background
OLEDST7789.showString("I am your TFT 2.0", 10, 10, 3, Color.White, Color.Black)
```

## Clear screen
New objects never replace already drawn objects on the screen. Instead, they are drawn in front of them. The clearScreen()-function will draw a black rectangle across the whole screen dimensions. The function does not expect any parameters.

```typescript
// Clear screen - replaces whole screen with a color Black rectangle 240x320
OLEDST7789.clearScreen(TFTColors.Black)
```

## Turn off display
You can turn off the display. In this mode, the frame memory is disabled and a blank (black) page will be shown. The function does not expect any parameters.

```typescript
// Turn off display
OLEDST7789.turnOff()
```

## Turn on display
You turn the display on again and enable the output from the frame memory. The function does not expect any parameters.

```typescript
// Turn on display
OLEDST7789.turnOn()
```

## Supported targets

<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.Nessiken }}/{{ site.github.pxt-ST7789V-2_0-TFT}}");</script>

## License

MIT
