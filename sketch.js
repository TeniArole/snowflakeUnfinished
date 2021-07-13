const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backgroundSnow
var snowflake1

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  
  backgroundSnow = loadImage("snow1.jpg")

  snowflake1 = new Snow(200, 200, 100, 100)

}

function draw() {
  //background(255,255,255); 
  background(backgroundSnow)
  Engine.update(engine);
  
  snowflake1.display();
  
  

  drawSprites();
}