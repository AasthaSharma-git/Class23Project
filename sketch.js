var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box_side1,box_side2,box_side3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    helicopterIMG=loadImage("helicopter.png")
    packageIMG=loadImage("package.png")
}

function setup() {
    createCanvas(800, 700);
     rectMode(CENTER);
    

    packageSprite=createSprite(width/2, 80, 10,10);
    packageSprite.addImage(packageIMG)
    packageSprite.scale=0.2

    helicopterSprite=createSprite(width/2, 200, 10,10);
    helicopterSprite.addImage(helicopterIMG)
    helicopterSprite.scale=0.6



    engine = Engine.create();
    world = engine.world;
    
    packageBody = Bodies.circle(width/2 , 200 , 25, {restitution:0.8, isStatic:true});
    World.add(world, packageBody);

    box_side1=Bodies.rectangle(width/2,700,200,20,{isStatic:true});
    World.add(world,box_side1);
    box_side2=Bodies.rectangle((width/2)-100,650,10,100,{isStatic:true});
    World.add(world,box_side2);
    box_side3=Bodies.rectangle((width/2)+100,650,10,100,{isStatic:true});
    World.add(world,box_side3);

    Engine.run(engine);

    console.log(packageBody.position.x)
  
}

function draw() {
 Engine.update(engine);
  background(0);

  fill('red');
  rect(box_side1.position.x,box_side1.position.y,200,20);
  rect(box_side2.position.x,box_side2.position.y,10,100);
  rect(box_side3.position.x,box_side3.position.y,10,100);

 packageSprite.x=packageBody.position.x;
 packageSprite.y=packageBody.position.y;
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
     Body.setStatic(packageBody,false);
	 
	 console.log("this is exceuted")
    
  }
  else if(keyCode === LEFT_ARROW){
	helicopterSprite.x=helicopterSprite.x-10;
	// packageBody.position.x=packageBody.position.x-10;
	
     translation={x:-10,y:0}
	   Matter.Body.translate(packageBody,translation); 
}
else if(keyCode === RIGHT_ARROW){
  helicopterSprite.x=helicopterSprite.x+10;
  // packageBody.position.x=packageBody.position.x+10;
  //   console.log(packageBody.positionImpulse)
    
   translation={x:10,y:0}
   Matter.Body.translate(packageBody,translation);

}


}
