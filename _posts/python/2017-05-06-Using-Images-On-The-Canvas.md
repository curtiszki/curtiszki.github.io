---
post_title: "Using Images On The Canvas"
---

While you may be able to find an illustrative light on a 2D canvas using the methods provided by the contextual API to create your desired imagery, rectangles, arcs and Bézier paths, may not just fit the bill.
<!--excerpt-->

Sometimes you may want to use an image to create a clear and concise item on the canvas view. To do so you can use the 2D context API to place an image on the canvas like so:

```javascript

// get the canvas and context
var canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d');

// create an instance of HTMLImageElement
var image = new Image;

// set the source of the image
image.src = '/path/to/image/src';

// when the image has loaded place it on the canvas.
image.onload = function () {

  ctx.drawImage(image, 10, 10, 100, 100);
}
```

The drawImage method has quite a few parameters that may be passed:

```javascript
// required parameters
CanvasRenderingContext2D.drawImage(image, dx, dy);

// required parameters alongside optional width and height
CanvasRenderingContext2D.drawImage(image, dx, dy, dWidth, dHeight);

// including all required and optional parameters
CanvasRenderingContext2D.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
```
****Parameter descriptions:****
+ image - Required parameter that indicates the element to draw onto the canvas.
+ dx - Required parameter that indicates the X coordinate where the image element will be placed on the targeted canvas.
+ dy - Required parameter that indicates the Y coordinate where the image element will placed on the targeted canvas.
+ dWidth - Indicates the width of the image drawing area on the canvas; the image will scale to the allotted area. Unless this value is provided, the image will not be scaled.
+ dHeight - Indicates the height of the image drawing area on the canvas; the image will scale vertically to the allotted area. Unless this value is provided, the image will not be scaled.
+ sx - Indicates where the X coordinate of the image where the image on the canvas will be drawn from. Area to the left of the coordinate will be clipped.
+ sy - Indicates where the Y coordinate of the image where the image on the canvas will be drawn from. Area to the top of this coordinate will be clipped.
+ sWidth - Indicates the width of the image's internal clipping area.
+ sHeight - Indicates the height of the image's internal clipping area.

Well, that's all. Hope this helps!
