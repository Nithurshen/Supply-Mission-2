const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var helicopter;
var package;
var ground;
var dropZone;

function setup() {
	var canvas = createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  helicopter = new Helicopter(400, 75, 35, 15);
  ground = new Ground(400, 500, 800, 10);
  package = new Package(400, 75, 35, 15);
  dropZone = new DropZone(400, 490, 200, 10);
  
}


function draw() {
  background(255);
  Engine.update(engine);



      if(keyCode == ENTER){
        
      package.velocityY = 4;
      package.display();
      }
  
      if(package.x - dropZone.x <= dropZone.width/2 + package.width/2 ||
        dropZone.x - package.x <= package.width/2 + dropZone.width/2 ||
        package.y - dropZone.y <= package.height/2 + dropZone.height/2 ||
        dropZone.y - package.y <= dropZone.height/2 + package.height/2){

          text("Mission Accomplished", 400, 350);

      }

  

  
  dropZone.display();
  helicopter.display();
  ground.display();

}



