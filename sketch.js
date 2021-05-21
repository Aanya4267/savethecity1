var scene;
var pc,pcimg;
var gameState;
var co1,co2,co3 ,covid; 
var bulletimg,bullet;
var points = 0;
var covidgrp;
var covid ;
var sound ; 
function preload(){
  scene = loadImage("images/city.jpg");
  pcimg=loadImage("images/alien.png");
  co1=loadImage("images/corona 1.png");
  co2=loadImage("images/corona 2.png");
  co3=loadImage("images/corona 3.png");
  
  bulletimg=loadImage("images/red.png");
  sound=loadSound("images/sound.mp3");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
 
  pc=createSprite(displayWidth/10,500,10,10);
  
  pc.addImage(pcimg);
  pc.scale=1.3;

bullet = createSprite(pc.x+90,pc.y+10,10,10);
bullet.addImage(bulletimg);
bullet.rotation = 270;
bullet.scale=0.04;
covidgrp = createGroup();
}

function draw() {
  background("white");
      image(scene, 0,0,displayWidth, displayHeight); 
      

      camera.position.x=displayWidth/2;
     
      
 
pc.setCollider("circle",-60,20,60 );

fill("white");
textSize(30);
text("POINTS: "+points ,displayWidth-displayWidth/7,camera.position.y+300);

 if(keyDown("space")){
   
  bullet.velocityX = 100;
  play(sound);
 }

 if(bullet.x>pc.x+400){
  bullet = createSprite(pc.x+90,pc.y+10,10,10);
bullet.addImage(bulletimg);
bullet.rotation = 270;
bullet.scale=0.04;
  
 }

 if(keyWentDown(UP_ARROW)){
  pc.velocityY = -15;
  bullet.velocityY = -15;
 }

 if(keyWentUp(UP_ARROW)){
   pc.velocityY = 0 ;
  bullet.velocityY=0;
 }

 
 
if(keyWentDown(DOWN_ARROW)){
  pc.velocityY = 15;
  bullet.velocityY = 15;
}
if(keyWentUp(DOWN_ARROW)){
  pc.velocityY = 0;
  bullet.velocityY = 0;
}


//covidgrp = new Group();





 
 if(frameCount%50===0){
  covid = createSprite(random(displayWidth/5,displayWidth),0-displayHeight||displayHeight);
 var rand = Math.round(random(1,3));
 //covid.velocityX = random(-3,3);
 covid.velocityY=random(3,15);
 //covid.bounceOff(edges);
 covidgrp.add(covid);
 switch(rand){
     case 1 : covid.addImage(co1) ;
     covid.scale =0.2;
     break;
     case 2 : covid.addImage(co2);
     covid.scale = 0.3;
    
     break;
     case 3 : covid.addImage(co3) ;
     covid.scale = 0.2;
     break;
     default:break;
    
 }
 
}
//if(bullet.isTouching(covid)){
 // covidgrp.destroyEach();
// covid.destroy();
//}


  drawSprites();
}