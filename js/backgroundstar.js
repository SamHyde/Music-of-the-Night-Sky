function backStar( type ) {
    this.xPos = random(windowWidth);
    this.yPos = random(windowHeight);
    this.xSpeed = random(0, .01);
    this.ySpeed = random(0, .01);
    this.color = color( random(245,255), random(245, 255), random(245, 255), random(150, 180));
    this.size = random(0.05, 4);
    this.type = type;
    this.attract = false;
} 
backStar.prototype.show = function(){
  noStroke();
  fill( this.color, this.color[3]);
  ellipse( this.xPos, this.yPos, this.size, this.size);
}

backStar.prototype.move = function(){

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


  // if ((this.xPos > width) || (this.xPos <0)){
  //   this.xSpeed *= -0.5;
  // }
  // if ((this.yPos > height) || (this.yPos <0)){
  //   this.xSpeed *= -0.5;
  // }
}

backStar.prototype.randomize = function(){
  this.color = color( random(1,100),random(100, 155), random(100, 255), random(100, 255));
}

backStar.prototype.sizeRandom = function(){
  this.size = random(0.5, 20);
}

// Newton's 2nd law: F = M * A
// or A = F / M
backStar.prototype.applyForce = function(force) {
  var f = p5.Vector.div(force,this.mass);
  this.acceleration.add(f);
};

backStar.prototype.update = function() {
  // Velocity changes according to acceleration
  this.velocity.add(this.acceleration);
  // position changes by velocity
  this.position.add(this.velocity);
  // We must clear acceleration each frame
  this.acceleration.mult(0);
};

