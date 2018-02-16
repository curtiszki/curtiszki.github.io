---

post_title: 'HTML Image-Maps and The &#60;area&#62; Element'

---

I recently happened upon the usage of an image-map used to redirect users to different areas of a website fairly seamlessly. In doing so, I came across a concept that I was previously unaware of: image-maps.

<!--excerpt-->
Image maps are a set of coordinates which contain hyperlink different areas of an image to different location. Naturally in order to do so, you would need to make the coordinate map and provide the image that the map relates to. In HTML this translates using the \<map\> and \<img\> elements.

The <map> element uses nested <area> elements to define the set of coordinates to create the image-map. This element uses the ***name*** attribute so that the image may use this element as a coordinate reference later on. It is important the name matches the specified name in the image element that the map refers to.

In use it would be like this:

```html
<img src='image.png' width='320' height='160' alt='image.png' usemap='imagemap'>

<map name='imagemap'>
  <!-- contents -->
</map>
```

The area elements nested inside the map element define different regions within the coordinate map. There are a few attributes of note that are used by the element:

- The **coords** attribute uses a set of values to specify the coordinates for the hyperlink region. The interpretation values depends of the value of the ***shape*** attribute. For rectangles the values are X<sub>1</sub>, Y<sub>1</sub>, X<sub>2</sub>, Y<sub>2</sub> (left, top, right, bottom). Circles simply use an X and Y coordinate to specify the coordinate and a radius value (X, Y, r). For polygons, x and y coordinates must be provided for each specified point.

- The **href** attribute naturally must be included to hyperlink to a different location. In HTML5 this value may be ignored, but naturally you will not link to anything.

- The **shape** attribute defines the shape of the hot spot. The shape element has the following values: circle, rect, polygon and default. The first three naturally represent the circle, rectangle and polygon shapes respectively. The default value indicates the entire region without using a defined shape.

Adding the required nested area elements...

```html
<img src='image.png' width='320' height='160' alt='image.png' usemap='imagemap'>

<map name='imagemap'>
  <area shape='rect' coords='0, 0, 160, 80' href='#left'>
  <area shape='rect' coords='160, 80, 320, 160' href='#right'>
</map>

```

The <map> and <area> elements are supported by all modern browsers (IE6+, Chrome 1.0, Firefox 1.0...) and thus can be easily implemented into any structure.
