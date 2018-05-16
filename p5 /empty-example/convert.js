

function setup() {
  size(640,360);
   background(255);
   noStroke();
   noFill();
  location = new PVector(500,-10);
  velocity = new PVector(1.5,2.1);
  gravity = new PVector(0,0.2);
}

function draw() {
	// Add velocity to the location.
  location.add(velocity);
  // Add gravity to velocity
  velocity.add(gravity);
  
  // Bounce off edges
  if ((location.x > width) || (location.x < 0)) {
    velocity.x = velocity.x * -1;
  }
  if (location.y > height) {
    // We're reducing velocity ever so slightly 
    // when it hits the bottom of the window
    velocity.y = velocity.y * -0.95; 
    location.y = height;
    
   if (location.x > width) {
     velocity.x = velocity.x * -0.95;
     location.x = height;
   }
  }

  // Display circle at location vector
  stroke(255);
  strokeWeight(2);
  fill(250,109,0);
  ellipse(location.x,location.y,48,48);

 //If mouse is held down the circle should change color
 if (mousePressed){
      fill(#1BF5D6);
  } else{
    fill(#1B27F5);{
  }
  ellipse(mouseX,mouseY,50,50);	
}