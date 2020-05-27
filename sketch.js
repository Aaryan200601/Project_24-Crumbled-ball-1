var wall1, wall2, wall3;
var ball,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	wall1 = new baseWall(width-125, 630);
	wall2 = new Wall(width-200, 590);
	wall3 = new Wall(width-50, 590);
	ball = new Paper(60, 635);
	ground = new Ground(width/2, 650, width, 20);

 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
background(0);
rectMode(CENTER);
ball.display();
ground.display();
wall1.display();
wall2.display();
wall3.display();
drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.position, {x:90, y:-200});
	 }
   }
   

