const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world
var object
var Box1
var Box2
var ground1
function setup() {

  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
Box1=new Box(200,100,50,50); 
Box2=new Box(200,300,50,50);
ground1=new ground(400,350,800,20);
}
function draw() {
  background(255,255,255);  
 Engine.update(engine);
 Box1.display();
 Box2.display();
 ground1.display();
 
}

  






































