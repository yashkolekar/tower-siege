
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	polygon_img=loadImage("polygon.png")
  }

function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;
ground1= new Ground(400,600,800,50)
	ground2=new Ground(300,400,200,20)
	ground3=new Ground(650,300,200,20)
	block1=new block(240,370,30,40)
	block2=new block(270,370,30,40)
	block3=new block(300,370,30,40)
	block4=new block(330,370,30,40)
	block5=new block(360,370,30,40)
block6=new block(270,330,30,40)
block7=new block(300,330,30,40)
block8=new block(330,330,30,40)
block9=new block(300,290,30,40)
block10=new block(590,270,30,40)
block11=new block(620,270,30,40)
block12=new block(650,270,30,40)
block13=new block(680,270,30,40)
block14=new block(710,270,30,40)
block15=new block(680,230,30,40)
block16=new block(650,230,30,40)
block17=new block(620,230,30,40)
block18=new block(650,190,30,40)

polygon=Bodies.circle(50,200,20)
World.add(world,polygon)

slingshot=new SlingShot(polygon,{x:100,y:200})
}

function draw() {

  background(60,46,46);
  //Add code for displaying text here!
  fill("white")
  textSize(20)
  text("Drag the hexagonal stone and release it, to launch it towards the block",50,50)
 ground1.display()
  ground2.display()
 ground3.display()
 block1.display()
 block2.display()
 block3.display()
 block4.display()
 block5.display()
 block6.display()
 block7.display()
 block8.display()
 block9.display()
 block10.display()
 block11.display()
 block12.display()
 block13.display()
 block14.display()
 block15.display()
 block16.display()
 block17.display()
 block18.display()

 imageMode(CENTER)
 image(polygon_img,polygon.position.x,polygon.position.y,40,40)
 slingshot.display()
}
function mouseDragged(){
	Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	slingshot.fly()
	
}
