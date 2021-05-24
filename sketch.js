var stillRectangle,movingRectangle,obj1,obj2;

function setup() {
  createCanvas(800,400);
  stillRectangle = createSprite(400, 200, 50, 100);
  stillRectangle.shapeColor="red"
  movingRectangle = createSprite(700, 200, 100, 50);
  movingRectangle.shapeColor="red"
  stillRectangle1 = createSprite(200, 200, 50, 100);
  stillRectangle1.shapeColor="red"
  obj1=createSprite(700,100,50,50)
  obj2=createSprite(100,100,50,50)
obj1.velocityX=-3
obj2.velocityX=3
}

function draw() {
  background(255,255,255);
  movingRectangle.y=mouseY
  movingRectangle.x=mouseX
   console.log(movingRectangle.x-stillRectangle.x)
//console.log(movingRectangle.x)
//console.log(stillRectangle.x)
console.log(movingRectangle.x-stillRectangle.x)



  drawSprites();
  if(isTouching(movingRectangle,stillRectangle1)){
    movingRectangle.shapeColor="yellow"
    stillRectangle1.shapeColor="yellow"

  }
  else{
    movingRectangle.shapeColor="red"
    stillRectangle1.shapeColor="red"
  }
  bounceOff(obj1,obj2)


  }
