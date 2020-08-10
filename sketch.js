
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1 = new Bob(300, 600, 20);
	bobObject2 = new Bob(340, 600, 20);
	bobObject3 = new Bob(380, 600, 20);
	bobObject4 = new Bob(420, 600, 20);
	bobObject5 = new Bob(460, 600, 20);

	roofObject = new Roof(390, 400, 210, 20);

	rope = new Rope(bobObject1.body, roofObject.body );


	//Engine.run(engine);
	var roof = Constraint.create(opt);
	World.add(world, roof)
  
}


function draw() {
  background(255);
  Engine.update(engine);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope.display();

  
  //drawSprites();
 
}



