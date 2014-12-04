//WNM 498 Generative Art & Creative Code
//Scott Brookshire, Sam Evans, Ryan Jones, Emilee Serafine


var notes = [ 60, 62, 64, 65, 67, 69, 71];

var const = [];

var index = 0;
var trigger = 0;
var autoplay = false;
var osc;
	
function setup(){
//Create the canvas at window height and width
	myCanvas = createCanvas(windowWidth, windowHeight);


// A triangle oscillator
  osc = new p5.TriOsc();
  // Start silent
  osc.start();
  osc.amp(0);

// Creating a new Star object

}

// A function to play a note
function playNote(note, duration) {
  osc.freq(midiToFreq(note));

// Fade it in
  osc.fade(0.5,0.2);
  
// If we sest a duration, fade it out
  if (duration) {
    setTimeout(function() {
      osc.fade(0,0.2);
    }, duration-50);
  }
}

function draw(){

// Draw a keyboard

  // The width for each key
  var y = height / notes.length;
  for (var i = 0; i < notes.length; i++) {
    var x = i * y;
    
    // If the mouse is over the key
    if (mouseY> x && mouseY < x + y && mouseX< height) {
      // If ye're clicking
      if (mouseIsPressed) {
        fill(100,255,200);
      // Or just rolling over
      } else {
        fill(127);
      }
    } else {
      fill(200);
    }
    
    // Dray the key
    rect(0, x, width, height); 
  }
}
// When we click
function mousePressed() {
  // Map mouse to the key index
  var key = floor(map(mouseY, 0, width, 0, notes.length));
  playNote(notes[key]);
}

// Fade it out when we release
function mouseReleased() {
  osc.fade(0,0.5);
}

// Window event handler when the browser window size changes
// When resized it calls the anonymous function
window.onresize = function(){
myCanvas.size(windowWidth, windowHeight);
}
	

	// Window event handler when the browser window size changes
	// When resized it calls the anonymous function
	window.onresize = function(){
	myCanvas.size(windowWidth, windowHeight);
	}

//Create an array of dots here for the constellations

}

function mousePressed() {
  var b = new dot(mouseX,mouseY,10); 

  	// Drawing dot
	b.display();

}


