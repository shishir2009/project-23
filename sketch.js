const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes variable here
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var btn;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(330,1000,530,20,roof_options);
    World.add(world,roof);

    var bob_options = {
      restitution: 0.95,
    }

	bob1= Bodies.circle(100,200,20,bob_options);
  World.add(world,bob1);

  bob2= Bodies.circle(200,200,20,bob_options);
  World.add(world,bob2);

  bob3= Bodies.circle(100,200,20,bob_options);
  World.add(world,bob3);

  bob4= Bodies.circle(100,200,20,bob_options);
  World.add(world,bob4);

  bob5= Bodies.circle(100,200,20,bob_options);
  World.add(world,bob5);


rope1= new rope(bob1,roof,-80,0);
rope2= new rope(bob2,roof,-90,0);
rope3= new rope(bob3,roof,-100,0);
rope4= new rope(bob4,roof,-110,0);
rope5= new rope(bob5,roof,-120,0);

	Engine.run(engine);
	
   
  ellipseMode(RADIUS);

}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,1400,20);

  //call display() to show ropes here
  //display();
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,20);
  ellipse(bob2.position.x,bob2.position.y,20);
  ellipse(bob3.position.x,bob3.position.y,20);
  ellipse(bob4.position.x,bob4.position.y,20);
  ellipse(bob5.position.x,bob5.position.y,20);

 Engine.update(engine);

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function vForce(){
Matter.Body.applyForce(bob1,{x:0,y:0},{x:0.05,y:0});
Matter.Body.applyForce(bob2,{x:0,y:0},{x:0.05,y:0});
Matter.Body.applyForce(bob3,{x:0,y:0},{x:0.05,y:0});
Matter.Body.applyForce(bob4,{x:0,y:0},{x:0.05,y:0});
Matter.Body.applyForce(bob5,{x:0,y:0},{x:0.05,y:0});
}

