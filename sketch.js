const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var man, man1, man_;
var polygon_img;

function preload(){
  man_=loadImage("man.PNG");
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(350,300,250,10);
  stand2 = new Stand(665,200,200,10);
  stand3 = new Stand(900,200,20,400)
  stand4 = new Stand(0,200,10,400)

  man  = new Man(320,275,80,140);
  man1 = new Man(610,175,80,140);


  //ball holder with slings
  ball = Bodies.circle(100,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the MAN...",80,30);

  ground.display();
  stand1.display();
  stand2.display();
  stand3.display();
  stand4.display();
  man.display();
  man1.display();
  strokeWeight(2);
  stroke(15);

  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(ball.body);
  }
}