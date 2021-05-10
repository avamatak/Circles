var rCircle;
var bCircle;
var thisCircle;

function setup() {
  createCanvas(400, 400);
  rCircle = createVector(9, 150);
  bCircle = createVector(200, 100);
  thisCircle = new Circle(150,150, 1,2);
}

function draw() {
  //background(130);
  //circle.seen();
  rCircle.x++;
  if (rCircle.x > width) {
    rCircle.x = 0;
  }
                  
  bCircle.y++;
  if (bCircle.y > height) {
    bCircle.y = 0;
  }
  circle.x += circle.xSpeed;
if (circle.x < 0 || circle.x > width) {
  circle.xSpeed *= -1;
}

  fill(255, 29, 90);
  ellipse(rCircle.x, rCircle.y, 100, 100);

  fill(10, 90, 10);
  ellipse(bCircle.x, bCircle.y, 100, 100);
}