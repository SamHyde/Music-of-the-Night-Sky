//WNM 498 Generative Art & Creative Code
//Scott Brookshire, Sam Evans, Ryan Jones, Emilee Serafine


//Creating Star Object
function Star(passX, passY, passD, passNote, passDuration){
	this.x = passX;
	this.y = passY;
	this.diameter = passD;
	this.note = passNote;
	this.duration = passDuration;
	// this.display = function() {
	// 	ellipse(this.x, this.y, this.diameter, this.diameter);
	// };
	
}

Star.prototype.display = function(){

	ellipse(this.x, this.y, this.diameter, this.diameter);
}

Star.prototype.play = function(){

	

	// playNote(this.note);

}

Star.prototype.animate = function(){
	// where we;ll call tween
}

// A function to play a note
// function playNote(note, duration) {
// 	osc.freq(midiToFreq(note));
// 	// Fade it in
// 	osc.fade(0.5,0.2);
  
	
// }