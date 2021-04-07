const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var Iron1 ,Stone1,rubber1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(900,450,70);
    Stone1 = new Stone (700,320,100,100) ;
    Iron1 = new Iron(300,250) ;


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    Stone1.display();
    Iron1.display();
    rubber1.display();
    plane.display();
    hammer.display();

    
 
}