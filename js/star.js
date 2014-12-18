//WNM 498 Generative Art & Creative Code
//Scott Brookshire, Sam Evans, Ryan Jones, Emilee Serafine


//Creating Star Object
function Star(passX, passY, passD, passNote, passDuration, passStartTime, starDuration, type){
	this.x = passX;
	this.y = passY;
	this.diameter = passD;
	this.note = passNote;
	this.duration = passDuration;
	this.StartTime = passStartTime;
	this.starDuration = starDuration;
	// this.display = function() {
	// 	ellipse(this.x, this.y, this.diameter, this.diameter);
	// };

		// CONSTELLATION PARALAX 
	    this.type = type;
    	this.attract = false;
    	this.xSpeed = random(0, .01);
    	this.ySpeed = random(0, .01);
}

Star.prototype.display = function(){

	ellipse(this.x, this.y, this.diameter, this.diameter);
}
	
	// CONSTELLATION PARALAX 
	Star.prototype.move = function(){

	  var horizon = (mouseX - width/2) / 2000 ;
	  var vertical = (mouseY - height/2) / 2000;

	  this.x += this.xSpeed + horizon;
	  this.y += this.ySpeed + vertical;

	  if ((this.x > width)){
	    this.x = 0;
	  }

	  if ((this.x < 0)){
	    this.x = width;
	  }

	  if ((this.y > height)){
	    this.y = 0;
	  }

	  if ((this.y < 0)){
	    this.y = height;
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

