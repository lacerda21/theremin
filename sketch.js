var pulse;
var red = 0;
var green = 0;
var blue = 0;

var t_red = 0;
var t_green = 0;
var t_blue = 0;


function setup() {
  createCanvas(1440, 800);
  
  // Create and start the pulse wave oscillator
  pulse = new p5.Pulse();
  pulse.amp(0.5);
  pulse.freq(440);
  pulse.start();
}

function draw() {
  var w = map(mouseX, 0, width, 0, 1);
  w = constrain(w, 0, 1);
  var v = map(mouseY, 0, height, 0, 1);
  v = constrain(v, 0, 1);
  masterVolume(v)
  pulse.width(w)
  
  var c = map(mouseX, 0, width, 0, 255);
  var c2 = map(mouseY, 0, width, 0, 255);
    
  background(c + c2, c2 * c/ (c + 1), 1500);
}
