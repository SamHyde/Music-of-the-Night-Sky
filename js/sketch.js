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

var tinyStars = [],
  numStars = 225;

var clickaction;


function setup(){
//Create the canvas at window height and width
	myCanvas = createCanvas(windowWidth, windowHeight);
  //Hide the Cursor
  noCursor();

//Call expand
clickaction =  new Expand();

// A triangle oscillator
  osc = new p5.SinOsc();
  // Start silent
  osc.start();
  osc.amp(0);  

  oscTwo = new p5.SinOsc();
  // Start silent
  oscTwo.start();
  oscTwo.amp(0);

//create a reverb for sound
  reverb = new p5.Reverb();

//connect reverb to sound
reverb.process(osc, 20, 0.2);



// Start Alexis' background star code

  smooth();
    noStroke();

  for (var i=0; i<numStars; i++) {
    tinyStars.push( new backStar("twinkle") ); // fill the array with circles at random positions
  }

  for( var i=0; i<tinyStars.length; i++ ){
        tinyStars[i] = new backStar( random( width ), random( height ), 0 );
      //tinyStars[i].vel.set( 0, 0, 0);
    } 


}

function update(){
    mouseAttract(); // change acc to make particles accelerate toward the mouse
}  


function draw(){

clear()

// Alexis' code

  stroke(255);
  
  for (var i=0; i<numStars; i++) {
    tinyStars[i].show(); // display all the circles
    tinyStars[i].move();
  }

  stroke(255);
// Draw a keyboard


  // The width for each key
  var h = height / notes.length;
  for (var i = 0; i < notes.length; i++) {
    var y = i * h;
    
  //   // If the mouse is over the key
  //   if (mouseY> y && mouseY < y + h && mouseX< width) {
  //     // If ye're clicking
  //     if (mouseIsPressed) {
  //       fill(100,255,200);
  //     // Or just rolling over
  //     } else {
  //       fill(127);
  //     }
  //   } else {
  //     fill(200);
  //   }
    
  //   // Dray the key
  //   rect(0, y, width, height); 
  }

  ellipse(mouseX, mouseY, 10, 10);
  fill(255);

  // Display stars
  //for every star in array once clicked mouse, display it
  for(var i=0; i<stars.length; i++){
    stars[i].display();

    if(stars[i].isDead()){
      print(true);
    }

    //calling a method
    // stars[i].play();
  }
  for(var i = 0; i < stars.length - 1; i++){
    line( stars[i].x, stars[i].y, stars[i+1].x, stars[i+1].y);
  }


  if (stars.length > 0 && millis() > trigger){
    print(index);
    osc.freq(midiToFreq(stars[index].note));
    // Fade it in
    osc.fade(.25,0);

    oscTwo.freq(midiToFreq(stars[index].note) /12);
    oscTwo.fade(.25,0);
    
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

  //Update the expand function
  clickaction.update();
  clickaction.display();




}



// When we click
function mousePressed() {
  // Map mouse to the key index
  var key = floor(map(mouseY, 0, height, 0, notes.length));



  //Pushing stars into array
  //
  stars.push(new Star( mouseX, mouseY, 10, notes[key], 200, millis())); 


  //Calling Expand
  clickaction.animate();



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




