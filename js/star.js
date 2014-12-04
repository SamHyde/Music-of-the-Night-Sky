//WNM 498 Generative Art & Creative Code
//Scott Brookshire, Sam Evans, Ryan Jones, Emilee Serafine


//Creating dot Object
function dot(passX, passY, passD){
	this.x = passX;
	this.y = passY;
	this.diameter = passD;

	this.display = function() {
		ellipse(this.x, this.y, this.diameter, this.diameter);
	};
	
}

