var square;


function setup() {
  createCanvas(600,600);

  square=createSprite(300,300,100,100)
  square.shapeColor="pink";
}

function draw() 
{
  background("blue");
  
  if (keyDown(RIGHT_ARROW)){
square.position.x=square.position.x+5;
  }
if (keyDown(LEFT_ARROW)){
  square.position.x=square.position.x-5;
}
if (keyDown(UP_ARROW)){
  square.position.y=square.position.y-5;
}
if (keyDown(DOWN_ARROW)){
  square.position.y=square.position.y+5;
}

drawSprites()
}




