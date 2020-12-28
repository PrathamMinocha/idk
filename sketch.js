const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var cMouse


function preload()
{
	backgroundIMG = loadImage("Universe.jpg");
}

function setup() {
	canvas = createCanvas(800,800);
	engine = Engine.create();
	world = engine.world;

	let cMouse = Mouse.create(canvas.elt);
	cMouse.pixelRatio = pixelDensity();
	let options = {
		mouse:cMouse
	}
	mConstraint = MouseConstraint.create(engine, options);
	World.add(world,mConstraint);

	//Create the Bodies Here.
	pendulum1 = new Pendulum(100,500, "red");
	pendulum2 = new Pendulum(150,500, "purple");
	pendulum3 = new Pendulum(200,500, "purple");
	pendulum4 = new Pendulum(250,500, "purple");
	pendulum5 = new Pendulum(300,500, "red");

	
	sling1 = new Sling(pendulum1.body, { x: 100, y: 90 }); 
	sling2 = new Sling(pendulum2.body, { x: 150, y: 90 }); 
	sling3 = new Sling(pendulum3.body, { x: 200, y: 90 }); 
	sling4 = new Sling(pendulum4.body, { x: 250, y: 90 }); 
	sling5 = new Sling(pendulum5.body, { x: 300, y: 90 }); 

	Engine.run(engine);
  
}


function draw() {
	background(0);
	rectMode(CENTER);
	Engine.update(engine);


 


  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();


}
  function mouseDragged(){
	  Matter.Body.setPosition(pendulum1.body, {x: mouseX, y:mouseY})
  }






