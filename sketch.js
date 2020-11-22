
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1;
var boy;
var tree;
var ground;
var stone;
var rubber;
var ground3;
var launcherObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  boy = new Boy(120,600,10,10);
  tree = new Tree(600,450,0.1,0.1);
  ground = new Ground(400,675,800,25);
  ground3 = new Ground2(400,695,800,1);
  stone = new Stone(100,200,40,40);
  mango1 = new Mango(560,370,50,50);
  mango2 = new Mango(600,300,50,50);
  mango3 = new Mango(730,380,50,50);
  mango4 = new Mango(470,380,50,50);
  mango5 = new Mango(630,390,50,50);
  mango6 = new Mango(680,330,50,50);

  rubber = new Rubber(stone.body, {x:50, y:540});

	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background("cyan");
  
 boy.display();
 tree.display();
 ground.display();
 ground3.display();
 stone.display();
 rubber.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 drawSprites();

 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);

 


 
}

function mouseDragged () {
  Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
 
 }
 
 function mouseReleased() {
 rubber.Fly();
 }

 function keyPressed(){
if (keyCode === 32){
  Matter.Body.setPosition(stone.body, {x:50, y:540})
  rubber.attach(stone.body); 
 }
 }


 function detectCollision(Astone,Amango){
 mangoBodyPosition = Amango.body.position
 BstoneBodyPosition = Astone.body.position

 var distance = dist(BstoneBodyPosition.x, BstoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance <= Amango.r + Astone.r)
{
Matter.Body.setStatic(Amango.body,false);
}


}
 



    