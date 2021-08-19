const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backgroundImg;
var engine,world;
var snow=[];

function preload(){
  backgroundImg=loadImage("snow1.jpg");

}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
  if(frameCount%50===0){
    for(var i=0;i<200;i++){
      snow.push(new Snow(random(0,800),random(0,800)));
    }
  }
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  for(var i=0;i<200;i++){
    snow[i].showDrop();
    snow[i].updateY();
  }
  drawSprites();
}