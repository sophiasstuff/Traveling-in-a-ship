var sea, seaImg;
var ship, ship_moving;

function preload(){
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  //make the sea
  sea = createSprite(200,200,200,200);
  sea.addImage(seaImg);
  sea.scale = 0.4
  

  //making the ship
  ship = createSprite(150,230,30,30)
  ship.addAnimation("moving", ship_moving);
  ship.scale = 0.2;
}

function draw() {
  background("blue");
  
  sea.velocityX = -2;
  
  if(sea.x < 0){
    sea.x = sea.width/5;
    
}

  drawSprites();
}




  