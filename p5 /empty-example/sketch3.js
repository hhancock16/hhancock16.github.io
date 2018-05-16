//example that draws ellipses when mouse is pressed 
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  strokeWeight (4);
}

function draw() {

	if (mouseIsPressed == true)	{
	//we use a double equal sign to compare whether 1 calue is equal to another value 
	//single equal sign sets the vaule of a variable

	ellipse (mouseX, mouseY, 30, 30);
	}	
}