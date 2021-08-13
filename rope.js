class rope{
	constructor( body1, body2,body3,body4,body5,body6, pointA, pointB)
	{
     this.pointA=pointA
	 this.pointB=pointB
	

	 var options={
		bodyA:body1,
        bodyB:body2,
		bodyC:body3,
		bodyD:body4,
		bodyE:body5,
		bodyF:body6,
		pointB:{x:this.pointA, y:this.pointB}
	 }
	//create rope constraint here
      var Rope = Matter.Constraint.create({
		  pointA:{x:200,y:0},
		  bodyB:bob1,
		  bodyC:bob2,
		  bodyD:bob3,
		  bodyE:bob4,
		  bodyF:bob5,
		  pointB:{x:0,y:0},
		  length:100,
		  stiffness:0.1,
		options,
	  })

	  World.add(world,Rope);

	}


    //create display() here 
display(){
pointA=this.Rope.bodyA.position;
pointB=this.Rope.bodyB.position;

strokeWeight(2);
line(roof.position.x,roof.position.y,bob1.position.x,bob1.position.y);
line(roof.position.x,roof.position.y,bob2.position.x,bob2.position.y);
line(roof.position.x,roof.position.y,bob3.position.x,bob3.position.y);
line(roof.position.x,roof.position.y,bob4.position.x,bob4.position.y);
line(roof.position.x,roof.position.y,bob5.position.x,bob5.position.y);
}

}
