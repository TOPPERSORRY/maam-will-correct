var path,pathImage;
var player,playerAnimation;
var obstacle,obstacle1,obstacle2,obstacle3,obstacle4;
var lives = 3;
var gameState = "play";
function preload(){
pathImage = loadImage ("Images/images.png")
playerAnimation = loadAnimation("Images/runner-1.png"
,"Images/runner-2.png")
obstacle1= loadImage("Images/logobstacle.png")
obstacle2= loadImage("Images/fireobstacle.png")
obstacle3= loadImage("Images/obstacle.png")
obstacle4= loadImage("Images/rightfire.png")
}



function setup() {
  createCanvas(800,600);
  path = createSprite(400,250)
  path.addImage(pathImage)
  path.scale = 4;
  path.velocityY = 2;
  player = createSprite(400,500)
  player.addAnimation("running",playerAnimation)
  player.scale =0.1;
 // player.velocityY = -2;
}

function draw() {
  background("white"); 
 
  textSize(30);
 fill ("red")
  text("lives:" + lives,680,50)

 

 if(gameState === "play"){
  if(path.y>600){
    path.y = path.height/2
  }
    if(keyDown(RIGHT_ARROW)){
    player.x = player.x + 2;
   }
   if(keyDown(LEFT_ARROW)){
    player.x = player.x - 2;
   }
   spawnObstacles();
   if(player.isTouching(obstacle)){
    lives = lives-1;
    }
 }
if(gameState === "end"){
 lives = 0;
 player.destroy();
 obstacle.destroy();
}

  



  drawSprites();
}
function spawnObstacles(){
    if (frameCount % 150 === 0){
      var obstacle = createSprite(550,100,10,40);
      obstacle.x = Math.round(random(100,550))
      var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: obstacle.addImage(obstacle1);
        obstacle.scale = 0.5;
        obstacle.velocityY = 2;
                break;
        case 2: obstacle.addImage(obstacle2);
        obstacle.scale = 0.3;
        obstacle.velocityY = 2;
        obstacle.x = 550;
                break;
         case 3: obstacle.addImage(obstacle3);
         obstacle.x = 380;
         obstacle.scale = 1;
         obstacle.velocityY = 2;
         break;
         case 4: obstacle.addImage(obstacle4);
         obstacle.x = 200;
         obstacle.velocityY = 2;
         obstacle.scale = 0.3;
         break;

 
                
                
}
obstacle.lifetime = 300;
player.depth = obstacle.depth + 2;

}




}