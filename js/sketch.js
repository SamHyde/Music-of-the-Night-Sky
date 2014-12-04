//WNM 498 Generative Art & Creative Code
//Scott Brookshire, Sam Evans, Ryan Jones, Emilee Serafine

var const = [];

	
function setup(){
	//Create the canvas at window height and width
	myCanvas = createCanvas(windowWidth, windowHeight);

	// Creating a new Star object

}

function draw(){
	// Window event handler when the browser window size changes
	// When resized it calls the anonymous function
	window.onresize = function(){
	myCanvas.size(windowWidth, windowHeight);
	}

	//Create an array of dots here for the constellations

	
}

function mousePressed() {
  var b = new dot(mouseX,mouseY,10); 

  	// Drawing dot
	b.display();


}


