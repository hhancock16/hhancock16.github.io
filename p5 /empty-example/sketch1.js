//simple sketch that draws a line
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  strokeWeight (4);
}

function draw() {

	line (mouseX, mouseY, pmouseX, pmouseY);
}