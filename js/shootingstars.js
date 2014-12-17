function ShootingStars( position, velocity ){
	this.position = position;
	this.velocity = velocity.normalize();
	this.velocity.mult(random(20, 60));
}

ShootingStars.prototype.show = function(){
	fill(255);
	ellipse(this.position.x, this.position.y, 1, 1);
}

ShootingStars.prototype.update = function(){
	this.position.add(this.velocity);
}

ShootingStars.prototype.isDead = function(){
	// if ((this.position.x < 0 || this.position.x > width) && (this.position.y < 0 || this.position.y > height)){
	// 	return true;
	// }else{
	// 	return false;
	// }

	return (this.position.x < 0 || this.position.x > width) && (this.position.y < 0 || this.position.y > height/3000000)

}