// general javascript functions for homepage

function homepage(){

  // animate the header only if screen is large enough.

  var landing = document.getElementById("landing");

  if (screen.availWidth > 600) {
    landingAnimate();
  } else {
    landing.style.height = window.innerHeight+'px';
    typeTerminal();
  }

  var landingListenersAdded = false;

  function landingAnimate() {

    // landing animations

    var width,
      height,
      canvas,
      ctx,
      points,
      animate = true,
      animateFr = false;

    if (window.width < 600) animate = false;
    // circle styles

    var circleColor = "#47507d",
      circleRadius = 1+Math.round(1*Math.random()),
      lineColor = "#50587b";

    /* :function definitions */

    function initLanding() {

      initLandingCanvas();

      if(animate) {

       initAnimation();
      }

      if(!landingListenersAdded) landingListeners();

    }

    // initialize the canvas + point grid

    function initLandingCanvas() {

      width = window.innerWidth;
      height = window.innerHeight;
      // craete canvas + get context.

      var canvasEl = document.createElement('canvas');

      if(landing.hasChildNodes()) {

        var children = landing.children;
        window.children = children;

        for (i = 0; i < children.length; i++) {

          if (children[i].nodeName == "CANVAS") {

            continue;
          } else if (children[i].nodeName != "CANVAS" && i == children.length - 1) {

            landing.appendChild(canvasEl);
          }
        }
      }

      // After appending the canvas, find the element.

      canvas = document.querySelectorAll("#landing canvas")[0];

      if(!canvas) throw new Error("Failed to append canvas...");

      canvas.setAttribute("width", width+"px");
      canvas.setAttribute("height", height+"px");
      ctx = canvas.getContext("2d");
      pointGrid();

    }

    function pointGrid() {

      // point grid -- for each point along x, fill out y.

      points = [];
      var displayWidth = Math.floor(width * 0.98);
      var magicNumber = width < 1200 ? Math.floor(displayWidth/100) :  14;

      for (var x = width * 0.01; x < width * 0.99; x = x + Math.floor(displayWidth/magicNumber)) {

        for (var y = 0; y < height; y = y + Math.floor(height/magicNumber)) {

          var cx = x - width * 0.02 + Math.random() * width * 0.04;
          var cy = y - height * 0.02 + Math.random() * height * 0.04;

          var point = {x:cx, originX: cx, y:cy, originY: cy}

          // set an opacity value for each point

          point.alpha = 1 - Math.ceil(Math.random()*0.9*100)/100;
          points.push(point);
        }
      }

      // get the closest points for each point

      for (var i = 0; i < points.length; i++) {

        var adjPoints = [];
        var p1 = points[i];

        for (var j = 0; j < points.length; j++) {

          var p2 = points[j];

          if(!(p1==p2)) {

            var placed = false;
            for (var k = 0; k < 5; k++) {

              if (!placed) {

                if (adjPoints[k] == undefined) {

                  adjPoints[k] = p2;
                  placed = true;
                }
              }
            }

            for (var k = 0; k < 5; k++) {

              if (!placed) {

                // if p2 is closer to p1 than the original value, replace it with p2.

                if (getDistance(p1, p2) < getDistance(p1, adjPoints[k])) {

                  adjPoints[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        p1.adjPoints = adjPoints;
      }

      for (var i in points) {

        // circleObject parameters: position, radius, color

        var c = new circleObject(points[i], circleRadius, circleColor);
        points[i].circle = c;
      }

    }

    function initAnimation() {

      animateHeader();
      for (var i in points) {
        shiftPoint(points[i]);
      }
    }

    function landingListeners() {

      landingListenersAdded = true;
      window.addEventListener('scroll', scrollCheck);
      window.addEventListener('resize', resize);

    }

    /* :initAnimation callbacks */
    function animateHeader(){

      (function(){

        ctx.clearRect(0, 0, width, height);
        for ( var i in points ) {

          drawLines(points[i]);
          points[i].circle.drawCircle();
        }
      })();

      requestAnimationFrame(animateHeader);

    }

    function drawLines(point) {

      // draw lines between each point and it's 5 closest points.

      for (var i in point.adjPoints) {

        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(point.adjPoints[i].x, point.adjPoints[i].y);
        ctx.strokeStyle = hexToRGB(lineColor, point.alpha);
        ctx.stroke();
      }
    }

    function shiftPoint(point) {

      if(animate) {

        TweenLite.to(point, 1+1*Math.random(), { x: point.originX - width * 0.02 + Math.random() * width * 0.04,
          y: point.originY - height * 0.02 + Math.random() * height * 0.04,
          ease: Circ.easeInOut,
          onComplete: function() {
            shiftPoint(point);
          }});
      }

    }

    /* initAnimation callbacks: */

    /* :event handling functions */

      // only animate the header if it is within view.

      function scrollCheck() {

        if (document.body.scrollTop > height) {

          animate = false;
        }
        else {

          animate = true;
          for (var i in points) {
            shiftPoint(points[i]);
          }
        }

      }

      // resize the header on resize...

      function resize() {

        TweenMax.killAll();
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        pointGrid();
        for (var i in points) {
          shiftPoint(points[i]);
        }
      }

    /* event handling functions: */

    function circleObject(position, radius, color) {

      var that = this;

      this.position = position || null;
      this.radius = radius || null;
      this.color = hexToRGB(color, this.alpha) || null;

      this.drawCircle = function() {

          ctx.beginPath();
          // arc begins FROM 3PM
          ctx.arc(that.position.x, that.position.y, that.radius, 0, 2*Math.PI, false);
          ctx.fillStyle = ''+this.color+'';
          ctx.fill();
      }
    }

    /* :util functions */

    // use the pythagorean theorem to find the distance between two points.

    function getDistance(p1, p2) {

      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    function hexToRGB(hex, alpha=null) {

      var opacity = alpha || null;

      var red = parseInt(hex.slice(1, 3), 16),
        green = parseInt(hex.slice(3, 5), 16),
        blue = parseInt(hex.slice(5, 7), 16);

      if (opacity) {

        return 'rgba('+red+','+green+','+blue+','+alpha+')';
      } else {

        return 'rgb('+red+','+green+','+blue+')';
      }

      // if it hasn't returned yet, something's wrong.

      throw new Error('Hex Values are Incorrect');
    }

    /* util functions: */

    /* function definitions: */


    /* node animation background END */



    initLanding();
    typeTerminal();

  }

  // typed.js jQuery plugin

  function typeTerminal() {
    $('.typing-terminal .type-text .typing').typed({

        stringsElement: $('.text-strings'),
        startDelay: 200,
        showCursor: false,
        callback: function(){

          var bounce = document.getElementById('down-chevron');


          bounce.style.opacity = "1";
          // params are OBJECT - DURATION - VARIABLES
          TweenMax.to(bounce, 1, {

            y:  35,
            repeat: -1,
            yoyo: true,
            ease: Power2.easeIn
          })
        }
    });
  }
};

homepage();
