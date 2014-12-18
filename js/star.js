//WNM 498 Generative Art & Creative Code
//Scott Brookshire, Sam Evans, Ryan Jones, Emilee Serafine


//Creating Star Object
function Star(passX, passY, passD, passNote, passDuration, passStartTime, starDuration, type){
	this.x = passX;
	this.y = passY;
	this.diameter = passD;
	this.note = passNote;
	this.duration = passDuration;
	this.startTime = passStartTime;
	this.starDuration = starDuration;

	// this.display = function() {
	// 	ellipse(this.x, this.y, this.diameter, this.diameter);
	// };

		// CONSTELLATION PARALAX 
		this.xPos = this.x;
	    this.yPos = this.y;
	    this.xSpeed = random(0, .01);
    	this.ySpeed = random(0, .01);
    	this.attract = false;

}

Star.prototype.display = function(){

	ellipse(this.x, this.y, this.diameter, this.diameter);
}
	
	// CONSTELLATION PARALAX 
	Star.prototype.move = function(){

	  var horizon = (mouseX - width/2) / 2000 ;
	  var vertical = (mouseY - height/2) / 2000;

	  this.xPos += this.xSpeed + horizon;
	  this.yPos += this.ySpeed + vertical;

	  if ((this.xPos > width)){
	    this.xPos = 0;
	  }

	  if ((this.xPos < 0)){
	    this.xPos = width;
	  }

	  if ((this.yPos > height)){
	    this.yPos = 0;
	  }

	  if ((this.yPos < 0)){
	    this.yPos = height;
	  }

	}

Star.prototype.play = function(){

	

	// playNote(this.note);

}

Star.prototype.animate = function(){
	// where we;ll call tween
}

Star.prototype.isDead = function(){
	return (this.startTime + this.starDuration) < millis();
}

// A function to play a note
// function playNote(note, duration) {
// 	osc.freq(midiToFreq(note));
// 	// Fade it in
// 	osc.fade(0.5,0.2);
  
	
// }


	// CONSTELLATION PARALAX 
	Star.prototype.applyForce = function(force) {
	  var f = p5.Vector.div(force,this.mass);
	  this.acceleration.add(f);
	};

	Star.prototype.update = function() {
	  // Velocity changes according to acceleration
	  this.velocity.add(this.acceleration);
	  // position changes by velocity
	  this.position.add(this.velocity);
	  // We must clear acceleration each frame
	  this.acceleration.mult(0);
	};

