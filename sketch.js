const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1100, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roofObject = new Roof(width/2, 50, width, 50);
	bobObject1 = new Bob(width/2, 350, 50);
	bobObject2 = new Bob(width/2-100, 350, 50);
	bobObject3 = new Bob(width/2+100, 350, 50);
	bobObject4 = new Bob(width/2-200, 350, 50);
	bobObject5 = new Bob(width/2+200, 350, 50);

	rope1 = new Rope(bobObject1.body, roofObject.body, 0, 0);
	rope2 = new Rope(bobObject2.body, roofObject.body, -100, 0);
	rope3= new Rope(bobObject3.body,roofObject.body,+100,0);
	rope4= new Rope(bobObject4.body,roofObject.body,-200,0);
	rope5= new Rope(bobObject5.body,roofObject.body,+200,0);


	//Engine.run(engine);
	//rope1 = new Rope(bob);
	//World.add(world, rope)

}


function draw() {
  background(255);
  //Engine.update(engine);

  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  
  //drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-200, y:100});
	}

	if(keyCode === UP_ARROW){
		Body.applyForce(bobObject2.body, bobObject2.body.position, {x:-300, y:200});
	}

	if(keyCode === UP_ARROW){
		Body.applyForce(bobObject3.body, bobObject3.body.position, {x:-200, y:300});
	}

	if(keyCode === UP_ARROW){
		Body.applyForce(bobObject4.body, bobObject4.body.position, {x:300, y:200});
	}

	if(keyCode === UP_ARROW){
		Body.applyForce(bobObject5.body, bobObject5.body.position, {x:-100, y:-300});
	}
}








