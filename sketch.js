const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var striker, ground, holder1, b1;

function setup(){
    createCanvas(800, 800);
    
    engine = Engine.create();
    world = engine.world;


striker= new Striker(100, 600, 50, 50);
ground=new Ground(400, 750, 800, 10);
slingShot = new SlingShot(striker.body,{x: 100, y: 600});
holder1= new Holder(600, 400, 200, 20);
b1 = new Block(600, 300+70, 20, 40);
b2 = new Block(620, 300+70, 20, 40);
b3 = new Block(640, 300+70, 20, 40);
b4 = new Block(580, 300+70, 20, 40);
b5 = new Block(562, 300+70, 20, 40);
b6 = new Block(570,  260+72, 20, 40);
b7 = new Block(590,  260+72, 20, 40);
b8 = new Block(610,  260+72, 20, 40);
b9 = new Block(630,  260+70, 20, 40);
b10 = new Block(580, 220+70, 20, 40);
b11 = new Block(600, 220+70, 20, 40);
b12 = new Block(620, 220+70, 20, 40);
b13 = new Block(590, 180+70, 20, 40);
b14 = new Block(610, 180+70, 20, 40);
b15 = new Block(600, 140+70, 20, 40);
b17 = new Block(682, 330, 25, 110);
b18 = new Block(680, 370-120, 60, 20);
b23 = new Block(660, 240, 20, 40);
b24 = new Block(700, 240, 20, 40);
b19 = new Block(521, 330, 25, 110, );
b20 = new Block(520, 370-120, 60, 20);
b21 = new Block(500, 240, 20, 40);
b22 = new Block(540, 240, 20, 40);
}

function draw(){
    background("black");
    Engine.update(engine);
    striker.display();
    ground.display();
    slingShot.display();
    holder1.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();
    b22.display();
    b23.display();
    b24.display();
}

function mouseDragged(){
    if(striker.body.position.x<=100){
    Matter.Body.setPosition(striker.body, {x:mouseX, y:mouseY});
    }
}

function mouseReleased(){
    slingShot.fly();
}
