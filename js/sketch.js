//WNM 498 Generative Art & Creative Code
//Scott Brookshire, Sam Evans, Ryan Jones, Emilee Serafine


var notes = [ 60, 62, 64, 65, 67, 69, 71];

// var const = [];

var index = 0;
var trigger = 0;
var autoplay = false;
var osc;
var oscTwo;

var stars = [];

var index = 0;
var trigger = 0;
var forward = true;
function setup(){
//Create the canvas at window height and width
	myCanvas = createCanvas(windowWidth, windowHeight);


// A triangle oscillator
  osc = new p5.SinOsc();
  // Start silent
  osc.start();
  osc.amp(0);  

  oscTwo = new p5.SqrOsc();
  // Start silent
  oscTwo.start();
  oscTwo.amp(0);

// Creating a new Star object

}


function draw(){

// Draw a keyboard

  // The width for each key
  var h = height / notes.length;
  for (var i = 0; i < notes.length; i++) {
    var y = i * h;
    
    // If the mouse is over the key
    if (mouseY> y && mouseY < y + h && mouseX< width) {
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
    rect(0, y, width, height); 
  }

  ellipse(mouseX, mouseY, 35, 32);
  fill(6, 0);

  // Display stars
  //for every star in array once clicked mouse, display it
  for(var i=0; i<stars.length; i++){
    stars[i].display();

    //calling a method
    // stars[i].play();
  }
  for(var i = 0; i < stars.length - 1; i++){
    line( stars[i].x, stars[i].y, stars[i+1].x, stars[i+1].y);
  }

  if (stars.length > 1 && millis() > trigger){
    print(index);
    osc.freq(midiToFreq(stars[index].note));
    // Fade it in
    osc.fade(1,0);

    oscTwo.freq(midiToFreq(stars[index].note) / 100);
    oscTwo.fade(1,0);
    
    trigger = millis() + stars[index].duration;

    if(index >= stars.length - 1){
      forward = false;
    } 
      if (index <= 0){
        forward = true;
    }
      if(forward){
        index++;
      } else{
        index--;
      }
  }





}
// When we click
function mousePressed() {
  // Map mouse to the key index
  var key = floor(map(mouseY, 0, height, 0, notes.length));


  //Pushing stars into array
  //
  stars.push(new Star( mouseX, mouseY, 10, notes[key], random(200, 1000))); 


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



