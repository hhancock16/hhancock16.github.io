function setup() {
  createCanvas(windowWidth, windowHeight);
  
  strokeWeight (4);
}

function draw() {

	if (mouseIsPressed == true)	{
	//we use a double equal sign to compare whether 1 calue is equal to another value 
	//single equal sign sets the vaule of a variable

	line (mouseX, mouseY, pmouseX, pmouseY);
	}	
}