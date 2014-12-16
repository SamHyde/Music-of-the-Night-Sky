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