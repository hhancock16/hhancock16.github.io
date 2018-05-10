function setup() {
  createCanvas(windowWidth, windowHeight);
	background(255);
	smooth();
	
	 print(mouseIsPressed);
}

function draw() {
  if (mouseIsPressed)	{
		fill(13,245,255);
  } else{
    fill (13,67,255);
  }
  ellipse(mouseX,mouseY,50,50)
}