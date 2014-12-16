function Expand(){
	this.strokeColor = color(255);
	this.strokeWeight = 2;
	this.finalScale = random(20,70);
	this.duration = 320;
	this.startTime = 0;
	this.endTime = 0;
	this.tween = 0;
}

Expand.prototype.update = function(){
	this.finalScale = random(20,70);
	this.tween = map( millis(), this.startTime, this.endTime, 0, this.finalScale );
	if( millis() > this.endTime ){
		this.endTime = this.startTime;
	}
}

Expand.prototype.animate = function(){
	this.startTime = millis();
	this.endTime = this.startTime + this.duration;
}

Expand.prototype.display = function(){
	noFill();
	stroke( this.strokeColor );
	strokeWeight( this.strokeWeight );
	ellipse( mouseX, mouseY, this.tween, this.tween );
}

