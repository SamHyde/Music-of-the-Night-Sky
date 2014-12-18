//WNM 498 Generative Art & Creative Code
//Scott Brookshire, Sam Evans, Ryan Jones, Emilee Serafine



var notes = [ 71, 69, 67, 65, 64, 62, 60];
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

var shootingStars = [];
var pervSecond = 0;
var perSecond = -60000000000000000;


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

  

// Draw a keyboard

  // The width for each key
  var h = height / notes.length;
  for (var i = 0; i < notes.length; i++) {
    var y = i * h;
    noFill();
    // If the mouse is over the key
    if (mouseY> y && mouseY < y + h && mouseX< width) {
      // If ye're clicking
      if (mouseIsPressed) {
        stroke(155,255,255,20);
      // Or just rolling over
      } else {
        stroke(155,255,255,20);
      }
    } else {
      stroke(255,255,255,20);
    }
    
    
    // Dray the key
    rect(0, y, width+50, height); 
  }

  ellipse(mouseX, mouseY, 10, 10);
  stroke(255);
  fill(255);

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

  //shooting star code

  for( var i = 0; i < shootingStars.length; i++){ // loop through shootingStars[]

    shootingStars[i].show();
    shootingStars[i].update();
    if (shootingStars[i].isDead()){
      shootingStars.splice(i, 1);
    }
  }

  var seconds = millis() / 100 ;
  if( seconds > pervSecond ){
    shootingStars.push( new ShootingStars( getRandomXY(), getRandomXY() ));
    prevSecond = seconds - perSecond;
  }


}

//shooting star

function getRandomXY(){
  var x = random(-width * 20, width * 25);
  var y = random(-height/5 * 3, height);
  return createVector(x,y);
}


	
	// Window event handler when the browser window size changes
	// When resized it calls the anonymous function
	window.onResize = function(){
	myCanvas.size(windowWidth, windowHeight);

}




