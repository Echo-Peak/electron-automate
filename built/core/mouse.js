let robot = require('robotjs');
let events = require('events');

class Emmiter extends events{}
class MouseFunctions{
  constructor(Robot){
    this.events =  new Emmiter();
    this.isActive = false;
    this.pollrate = 30;  //ms
    //using setInterval since robotjs dont have callbacks
    this.intervalChecker = null;

  }
  stop(){
    this.events.emit('stop');
  }

  sine(){
    // this.elipse = this.pollrate; //ms
    // this.action(function(){
    //     var twoPI = Math.PI * 2.0;
    //     var screenSize = robot.getScreenSize();
    //     var height = (screenSize.height / 2) - 10;
    //     var width = screenSize.width;
    //
    //     for (var x = 0; x < width; x++){
    //         y = height * Math.sin((twoPI * x) / width) + height;
    //         robot.moveMouse(x, y);
    //     }
    //   this.elipse += this.pollrate;
    // });

    this.events.on('stop' ,function(){
      clearInterval(x);
    });

  }
  sineX(varsObj){
    robot.setMouseDelay(2);

    var twoPI = Math.PI * 2.0;
    var screenSize = robot.getScreenSize();
    var height = (screenSize.height / 2) - 10;
    var width = screenSize.width;


      for (var x = 0; x < width; x++){
          var y = height * Math.sin((twoPI * x) / width) + height;
          robot.moveMouse(x, y);
      }
  }
  sineY(varsObj){

  }
  freeze(varsObj){
    var screenSize = robot.getScreenSize();
    var height = screenSize.height / 2;
    var width = screenSize.width / 2;
    let failSafe = 0;

    let x = setInterval(function(){
      failSafe += 1;
      if(failSafe > varsObj.delay * 10){
        clearInterval(x);
      }
      robot.moveMouse(width, height);
    },varsObj.poll || 10);

    setTimeout(function(){
      clearInterval(x);
    },varsObj.delay || 100);

    this.events.on('stop' ,function(){
      clearInterval(x);
    });
  }
  circle(varsObj){
    let radius = varsObj.radius;
    var angle = 3 * Math.PI / 180;
    var screenSize = robot.getScreenSize();
    var cx = screenSize.width;
    var cy = (screenSize.height / 2) - 10;;
    let x  = null;
    let failSafe = 0;
    setTimeout(function(){
      robot.moveMouse(cx, cy);
      clearInterval(x);
    },varsObj.delay || 1000);

    x = setInterval(function(){
      failSafe += 1;
      if(failSafe > varsObj.delay * 10){
        robot.moveMouse(cx, cy);
        clearInterval(x);
      }
      angle += 3 * Math.PI / 180;
      let x = cx + radius * Math.cos(angle);
      let y = cy + radius * Math.sin(angle);
      robot.moveMouse(x, y);
    },40);

    this.events.on('stop' ,function(){
      clearInterval(x);
    });
  }

  randomVector(varsObj){
    var screenSize = robot.getScreenSize();
    var cx = screenSize.width;
    var cy = screenSize.height - 10;;
    let interval  = null;
    var dx = 0;
    var dy = 0;
    var x = cx;
    var y = cy;
    var height = screenSize.height;
    var width = screenSize.width;
    var delta = 5;
    var max = 15;
    let failSafe = 0;
    setTimeout(function(){
      robot.moveMouse(cx/2, cy/2);
      clearInterval(interval);
    },varsObj.delay || 1000);

    interval = setInterval(function(){
      failSafe += 1;
      if(failSafe > varsObj.delay * 10){
        robot.moveMouse(cx/2, cy/2);
        clearInterval(interval);
      }
      var d2x = (Math.random() * delta - delta / 2); //change dx and dy by random value
    var d2y = (Math.random() * delta - delta / 2);

    if (Math.abs(d2x + dx) > max) // start slowing down if going too fast
    d2x *= -1;
    if (Math.abs(d2y + dy) > max) d2y *= -1;

    dx += d2x;
    dy += d2y;

    if ((x + dx) < 0 || (x + dx) > width) // bounce off walls
    dx *= -1;
    if ((y + dy) < 0 || (y + dy) > height) dy *= -1;

    x += dx;
    y += dy;

      robot.moveMouse(x, y);
    },20);
    this.events.on('stop' ,function(){
      clearInterval(interval);
    });

  }
  leftEdgeSliding(varsObj){
    let radius = varsObj.radius;
    var angle = 3 * Math.PI / 180;
    var screenSize = robot.getScreenSize();
    var cx = screenSize.width;
    var cy = (screenSize.height / 2) - 10;;
    let x  = null;
    let failSafe = 0;
    setTimeout(function(){
      robot.moveMouse(cx, cy);
      clearInterval(x);
    },varsObj.delay || 1000);

    x = setInterval(function(){
      failSafe += 1;
      if(failSafe > varsObj.delay * 10){
        robot.moveMouse(cx, cy);
        clearInterval(x);
      }
      angle += 5 * Math.PI / 180;
     let x = cx * Math.tan(angle);
     let y = cy + radius * Math.tan(angle);
      robot.moveMouse(x, y);
    },40);

    this.events.on('stop' ,function(){
      clearInterval(x);
    });

  }
  taskbarSliding(varsObj){
    let radius = varsObj.radius;
    var angle = 3 * Math.PI / 180;
    var screenSize = robot.getScreenSize();
    var cx = screenSize.width;
    var cy = (screenSize.height / 2) - 10;;
    let x  = null;
    let failSafe = 0;
    setTimeout(function(){
      robot.moveMouse(cx, cy);
      clearInterval(x);
    },varsObj.delay || 1000);

    x = setInterval(function(){
      failSafe += 1;
      if(failSafe > varsObj.delay * 10){
        robot.moveMouse(cx, cy);
        clearInterval(x);
      }
      angle += 5 * Math.PI / 180;
      let x = cx * Math.cos(angle);
      let y = cy + radius * Math.tan(angle);
      robot.moveMouse(x, y);
    },40);
    this.events.on('stop' ,function(){
      clearInterval(x);
    });
  }
  bounce(varsObj){
    var angle = 3 * Math.PI / 180;
    var screenSize = robot.getScreenSize();
    var cx = screenSize.width;
    var cy = screenSize.height - 10;
    var ballRadius = varsObj.radius;
    var x = cx;
    var y = cy;
    var dx = 15;
    var dy = -15;
    var interval = null;
    let failSafe = 0;
    setTimeout(function(){
      robot.moveMouse(cx/2, cy/2);
      clearInterval(interval);
    },varsObj.delay || 1000);

    interval = setInterval(function(){
      failSafe += 1;
      if(failSafe > varsObj.delay * 10){
        robot.moveMouse(cx/2, cy/2);
        clearInterval(interval);
      }
      robot.moveMouse(x,y);
      if(x + dx > cx-ballRadius || x + dx < ballRadius) {
          dx = -dx;
      }
      if(y + dy > cy-ballRadius || y + dy < ballRadius) {
          dy = -dy;
      }

      x += dx;
      y += dy;

    },40);

    this.events.on('stop' ,function(){
      clearInterval(interval);
    });

  }
}


module.exports = MouseFunctions
