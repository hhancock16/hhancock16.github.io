//if mouse pressed on the side of the ellipse it turns red if it's black and pressing on the other side with turn it black if it's red 
var x = 100;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  strokeWeight (4);
}

function draw() {
	if (mouseX < 300) {
		stroke (255,0,0);
	} else {
		stroke(0);
	}

	if (mouseIsPressed == true)	{
	//we use a double equal sign to compare whether 1 calue is equal to another value 
	//single equal sign sets the vaule of a variable

		ellipse (x, 300, 200, 200);
	}	
}