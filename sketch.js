var bgimg;
var player,ply_running;
var invisibleground;
var zombie,zomimg;
var carimg,carsGroup;
var boy_jump;

function preload(){
    bgimg = loadImage("images/backgroung.png")
    ply_running = loadAnimation("images/p1.png","images/p2.png","images/p3.png","images/p4.png")
    zomimg = loadImage("images/zombie.png");
    carimg = loadImage("images/coin (1).png")
    boy_jump = loadAnimation("images/p5.png","images/p6.png","images/p7.png")
}
function setup(){
createCanvas(1100,670);
backgrounds = createSprite(670,390);
backgrounds.addImage(bgimg);
backgrounds.scale = 2;
backgrounds.velocityX = -3

player = createSprite(400,650,40,80);
player.addAnimation("running", ply_running);
player.addAnimation("jumping",boy_jump);
zombie = createSprite(190,590,40,80);
zombie .addImage(zomimg);
zombie.scale = 0.3;

carsGroup = createGroup();
zomGroup = createGroup();

invisibleground = createSprite(390,670,1800,10);
invisibleground.visible = false;
}
function draw(){
background(0)


if(keyDown("space")){
    player.velocityY = -14 
    player.changeAnimation("jumping",boy_jump);

}
if (player.isTouching(invisibleground)  ){
    player.changeAnimation("running", ply_running);

}
player.velocityY = player.velocityY + 0.3
  
if (backgrounds.x < 0){
    backgrounds.x = 550
}

player.collide(invisibleground);
crashcar();

drawSprites()
}

function crashcar(){
    if(frameCount % 350 === 0){
    var car = createSprite(700,610,30,80);
    car.addImage(carimg)
    car.velocityX = -2
    car.lifetime = 390;
    car.depth  = zombie.depth;
   zombie.depth  = car.depth+1;
    }

}
