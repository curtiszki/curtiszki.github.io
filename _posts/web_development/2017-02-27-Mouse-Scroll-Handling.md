---
post_title: "Mouse Scroll Event Handling"
---

Adding event listening functionality to the scroll of a mouse can be quite useful to create more engaging and interactive user experiences. For example, you may want to trigger a specific function upon scrolling, manipulate an element or zoom in/out in lieu of the default action.

<!--excerpt-->
Usually this can be done using the **"wheel"** event. The wheel event is an event that is fired whenever the wheel of any pointing device (i.e. mouse, stylus, trackpad) is moved. The wheel event inherits from the [WheelEvent](https://www.w3.org/TR/uievents/#interface-wheelevent) interface, which in turn inherits from the MouseEvent, UIEvent and Event interfaces.

The WheelEvent comes with a few properties to note, namely WheelEvent.deltaX, WheelEvent.deltaY, and WheelEvent.deltaZ which return doubles for scroll amounts the horizontally, vertically and along the z-axis respectively.

An example of the implementation of this event is as follows:

```javascript
var body = document.querySelector("body");
// add a listener for the wheel event
window.addEventListener('wheel', function(e){

  // zoom in the body element.
  body.style.zoom = "200%";
});
```

It's also important to note that scrolling the wheel up will return a negative value for deltaY. Using this fact, we can 'zoom out' the page as well.

```javascript

var body = document.querySelector("body");

window.addEventListener('wheel', function(e){

  // if the mouse was scrolled up...
  if (e.deltaY < 0) {
    // zoom the body out.
    body.style.zoom = "50%";
  }
  // or if it was scrolled down...
  else {
    // zoom in on the body.
    body.style.zoom = "200%";
  }

  return false;
}, false);
```
**Browser Support:**

| Google Chrome | Firefox | Edge | Internet Explorer | Safari | Opera |
| ------------- | ------- | ---- | ----------------- | ------ | ----- |
| 31            | 17      | Yes  | 9.0               | 18     | 7     |

The wheel event should work in most modern browsers, but if you need to support older and more dated browsers a fallback will be required.

### Mousewheel Event

If you need to support older versions of Internet Explorer, you can use the Mousewheel Event which is supported from IE6 onwards. Unfortunately, IE and opera do not support the wheelDeltaX and wheelDeltaY attributes. This means you will not be able to use horizontal scrolling. There's also one more problem: Firefox does not support the mousewheel event. In its stead there has been a "DOMMouseScroll" event  that passes a positive property while scrolling down.
.
```javascript
// scrolling with ie6-8 support.

var body = document.getElementById('body');

// window.addEventListener is ie9+
if (window.addEventListener) {
  // here's our previous listener...
  body.addEventListener('wheel', mouseEventHandler, false);
}
else {
  // otherwise for ie 6-8
  body.addEventListener('mousewheel', mouseEventHandler, false);

  // older versions of firefox.
  body.addEventListener('DOMMouseScroll', mouseEventHandler, false);
}

// previous handling function rewritten for increased cross-browser compatibility.
function mouseEventHandler(e) {
  // IE 6-8 support
  var e = window.event || e;

  // the detail value in firefox is inverted.
  var delta = 100 + Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))*50;
  body.style.zoom = delta+'%';
}

```

**Browser Support:**

| Google Chrome | Firefox | Edge | Internet Explorer | Safari | Opera |
| ------------- | ------- | ---- | ----------------- | ------ | ----- |
| 1             | None    | Yes  | 6.0               | 3      | 10     |
