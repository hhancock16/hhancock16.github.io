//sketch example for resizing window
//sketch should draw white and draw black when mouse is pressed
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(0,102);
}

function draw() {

if (mouseIsPressed)	{
	fill(0, 102);
  	ellipse(mouseX,mouseY,20,20);
  } else {
  	fill(255, 102);
  }
  ellipse(mouseX, mouseY, 20, 20);
 }

function windowResized()	{
	resizeCanvas(windowWidth, windowHeight)
}