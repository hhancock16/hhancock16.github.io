//example that draws red elipses on a certain portain of canvas while other portain is another color 
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

	ellipse (mouseX, mouseY, 30, 30);
	}	
}