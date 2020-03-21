var fixedRect, movingRect;
var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,60);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(400, 600, 80, 40);
  rect1.shapeColor = "green";
  rect1.debug = true;
  rect2 = createSprite(200, 600, 50, 50);
  rect2.shapeColor = "green"
  rect2.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  rect1.velocityX = -5;
  rect2.velocityX = +5;
}

function draw() {
  background(0,0,0);
  bounceOff(movingRect, fixedRect);
  bounceOff(rect1, rect2);  
  drawSprites();
}

function bounceOff(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
  if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
  object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
}
}



/*function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  movingRect = createSprite(400, 200, 80, 30)
  fixedRect.shapeColor = "green"
  movingRect.shapeColor = "green" 
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "red"
    movingRect.shapeColor = "red"
    }
    else{
      fixedRect.shapeColor = "green"
      movingRect.shapeColor = "green"
    }
  drawSprites();
}*/

