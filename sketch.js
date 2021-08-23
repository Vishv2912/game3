const START =0;
const WAIT =1;
const PLAY=2;
const END=3 ;


var gameState=START;

var form,game,player,playerCount;
var database;

//theif 
var theif;

//theif stand right/left==
var theifRightStand,theifLeftStand;

//theif running==
var theifRightRun,theifLeftRun;


//guard
var guard;

//guard stand right/left==
var guardLeftStand,guardRightStand;

//guard running==
var guardRightRun,guardLeftRun;


//bg
var bg

function preload(){
bg=loadImage("images/bg.jpeg")
//theif==
theifRightStand=loadAnimation("images/theifRightStand.png")

theifLeftStand=loadImage("images/theifLeftStand.png")

theifLeftRun=loadAnimation("images/theifLeftRun1.png","images/theifLeftRun2.png","images/theifLeftRun3.png")
 
theifRightRun=loadAnimation("images/theifRightRun1.png","images/theifRightRun2.png","images/theifRightRun3.png")



//guard==
guardRightStand=loadImage("images/guardRightStand.png")

guardLeftStand=loadImage("images/guardLeftStand.png")

guardLeftRun=loadAnimation("images/guardLeftRun1.png","images/guardLeftRun2.png","images/guardLeftRun3.png")
 
guardRightRun=loadAnimation("images/guardRightRun1.png","images/guardRightRun2.png","images/guardRightRun3.png")








}

function setup() {
  createCanvas(windowWidth-20,windowHeight-20);
    database=firebase.database();
  
game=new Game();

game.getGameState();  

game.start();

//console.log(gameState);


/*
  theif=createSprite(300,300,50,50);
  theif.addAnimation("theif",theifLeftRun);
 // theif.addAnimation("theif",theifRightStand);
  
  theif.scale=0.3;

  console.log(theif);

guard=createSprite(600,300,50,50);
guard.addAnimation("body",guardLeftRun)
guard.scale=0.3;
*/
  /*
//vartical borders===
wall1=createSprite(5,displayWidth/4,10,displayHeight);
wall2=createSprite(743,displayWidth/4,10,displayHeight);

//horizontalborders==
wall3=createSprite(displayWidth/4,5,displayWidth,10);
wall4=createSprite(displayWidth/4,663,displayWidth,10);

wall5=createSprite(375,25,5,50)
wall6=createSprite(375,225,5,200)
wall7=createSprite(375,425,5,150)

wall8=createSprite()
wall9=createSprite()
wall10=createSprite()
wall11=createSprite()


wall12=createSprite()
wall13=createSprite()
wall14=createSprite()
wall15=createSprite()
wall16=createSprite()
wall17=createSprite()
wall18=createSprite()
wall19=createSprite()
wall20=createSprite()

*/


  
}

function draw() {
background(bg)

/*
if(keyCode==32){
//theif.velocityX-=2
wall2.x+=1
}
 */  
if(gameState==PLAY){
  game.play();
}



// fill("blue")
 //textSize(20) 
//text("mouseX = "+mouseX,20,70)
//text("mouseY = "+mouseY,20,90)

drawSprites();
}