
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	hexagonImg = loadImage("Hexagon.png");
}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stand = new Ground(400, 390, 800, 20);

	block1 = new Box(550, 365, 50, 50);
	block2 = new Box(600, 365, 50, 50);	
	block3 = new Box(650, 365, 50, 50);	
	block4 = new Box(700, 365, 50, 50);	
	block5 = new Box(750, 365, 50, 50);	
	block6 = new Box(575, 340, 50, 50);
	block7 = new Box(625, 340, 50, 50);	
	block8 = new Box(675, 340, 50, 50);
	block9 = new Box(725, 340, 50, 50);
	block10 = new Box(600, 315, 50, 50);
	block11 = new Box(650, 315, 50, 50);
	block12 = new Box(700, 315, 50, 50);
	block13 = new Box(625, 290, 50, 50);
	block14 = new Box(675, 290, 50, 50);
	block15 = new Box(650, 265, 50, 50);

	polygon_options = {
		density : 1.2,
		restitution : 0
	}

	polygon = Bodies.circle(100, 200, 20, polygon_options);
	World.add(world, polygon);

	sling = new Sling(this.polygon, {x:100, y:200});
	
	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background("black");

	stand.display();

	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();
	block7.display();
	block8.display();
	block9.display();
	block10.display();
	block11.display();
	block12.display();
	block13.display();
	block14.display();
	block15.display();

	imageMode(CENTER);
	image(hexagonImg, polygon.position.x, polygon.position.y, 40, 40);

	drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY}); 
}
  
function mouseReleased(){
	sling.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(this.polygon, {x:100, y:200});
		sling.attach(this.polygon);
	}
  }