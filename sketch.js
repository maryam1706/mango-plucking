
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//load tree image and boy image
	treeImg = loadImage("sprites/tree.png");
	boyImg = loadImage("sprites/Tutorial.png")
	stoneImg = loadImage("sprites/stone.png");

}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Boy Sprite and add the image

	boy = createSprite(100,720,20,20);
	boy.scale=0.1;
	boy.addImage(boyImg);
  

	//Create Tree Sprite and add the image
	tree = createSprite(900,470,20,20);
	tree.scale= 0.5;
    tree.addImage(treeImg);
	
	//Create Ground object 
	ground = new Ground(1300,790,10,10);

	

	//create 10 mango objects, mango1 to mango10
	mango1 = new Mango(800,218);
	

	//Create stone object
	stone = new Stone(900,470);
	
	//Create sling object by passing stone body and points(x,y)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  Engine.update(engine);
 
  drawSprites();

  //Display Ground,Mangos,stone,sling
  ground.display();
  tree.display();
  mango1.display();
  stone.display();


  //detect collision between stone and all the mangoes using detectcollision()

 // detectCollision(stone,mango1)
  
  
 


/*function mouseDragged(){
	//Use Matter.Body.setPosition to set the position of the stone
}*/

/*function mouseReleased(){
	if(keyCode === 32){
	sling.fly();

  }
}

function detectCollision(stone_arg,mango_arg){
	//Detect collision using the function mentioned in pdf
}*/

}
