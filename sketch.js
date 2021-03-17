var hour
var minute
var second

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background("black");  
  
translate(200,200)
rotate (-90);

   hr = hour();
   mn = minute();
   sc = second();
  
  strokeWeight(8);
  stroke("blue");
  noFill();
  scAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle);
  
  stroke("red");
  mnAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnAngle);
  
  stroke("green");
  hrAngle = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,hrAngle);
  
  push();
  rotate(scAngle);
  stroke("blue");
  strokeWeight(7)
  line(0,0,100,0);
  pop();
  
  push();
  rotate(mnAngle);
  stroke("red");
  strokeWeight(7)
  line(0,0,75,0);
  pop();
  
  push();
  rotate(hrAngle);
  stroke("green");
  strokeWeight(7)
  line(0,0,50,0);
  pop();
  
  drawSprites();
}