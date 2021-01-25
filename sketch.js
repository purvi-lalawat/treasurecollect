//create gamestates
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var path,boy,cash,diamonds,jwellery,sword,gameOver,boy_running;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,
    swordImg,gameOverImg,boy_runningImg;
var treasure;
var cashG,diamondsG,jwelleryG,swordGroup;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  gameOver = loadImage("gameOver.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  gameOverImg =loadImage("gameOver.png");
}

function setup(){
  
  createCanvas(700,700);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;

gameOver = createSprite(300,100)
gameOver.addImage(gameOverImg)
  
//creating boy running
boy = createSprite(70,330,20,20);
boy.addAnimation("SahilRunning",boyImg);
 
boy.scale=0.05;
  
  treasure = 0;
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();


}

function draw() {

  background(0);
  boy.x = World.mouseX
  
  
  console.log("this is ",gameState)
  
  
  if(gameState === PLAY){
     gameOver.visible = false
    //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
   
  }
  } 
  
     if (gameState === END) {
      path.velocityY = 0;
      boy.velocityY = 0;
    
     edges= createEdgeSprites();
     boy.collide(edges);
     
     cashG.destroyEach();
     cashG.setVelocityYEach(0);
     
     diamondsG.destroyEach();
     diamondsG.setVelocityXEach(0);
     
     jwelleryG.destroyEach();
     jwelleryG.setVelocityXEach(0);
     
     swordGroup.destroyEach();
     swordGroup.setVelocityEach(0);
     gameOver.visible = true
 }
  
  
  
  
  
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasure = treasure +50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasure = treasure +100
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasure = treasure +70
    }else
      if(swordGroup.isTouching(boy)) {
        gameState = END
        boy.addAnimation("SahilRunning",boyImg);
         boy.x = 350
         boy.y = 350
    }
    
   
    drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasure,150,30)
}
  



function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}
