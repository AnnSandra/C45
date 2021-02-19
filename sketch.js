
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bgImage,bg;
var player;
var heathyFoodGroup,junkFoodGroup
function preload()
{
	bgImage=loadImage("images/bg2.jpg");
	appleImage=loadImage("images/apple.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	bg= createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
	bg.addImage(bgImage);
	bg.scale=3.2;
	bg.velocityX=-3;

	healthyFoodGroup = new Group();
	junkFoodGroup = new Group();

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	player= new Player();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(bg.x<500){
	  bg.x=windowWidth/2;
  }
  drawSprites();

	player.display();
	
		  spawnHealthyFood();

  }

  function spawnHealthyFood(){
	if(frameCount %240 ===0){
		var hfood=createSprite(windowWidth+100,500,50,50);
		hfood.velocityX=-10;
		hfood.addImage(appleImage);
		healthyFoodGroup.add(hfood);
	}

  }



