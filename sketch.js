var gameObj1,gameObj2;

function setup() {
  createCanvas(800,400);
  gameObj1= createSprite(400, 100, 50, 80);
  gameObj1.shapeColor = "green";
  gameObj1.velocityY = 2;

  gameObj2 = createSprite(400,300,50,80);
  gameObj2.shapeColor = "orange";
  gameObj2.velocityY = -2;
}

function draw() {
  background(0);  
  bounceOff(gameObj1,gameObj2);
  drawSprites();
  
}
