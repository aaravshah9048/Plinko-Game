var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var x = 150 ; x<=180; x = x+180){
    divisions.push(new Divisions(x, height-divisionHeight/2,10, divisionHeight));
  }
  for (var y = 300 ; y<=380; x = y+380){
    divisions.push(new Divisions(y, height-divisionHeight/2,10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
 for (var j = 75; j<=width; j=j+50){
   plinkos.push(new Plinko(j,275));
 }
  
  //create 4th row of plinko objects\
  for (var j=50; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  } 


  //create particle objects
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }

  for (var i= 0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  for (var i= 0; i<plinkos.length; i++){
    plinkos[i].display();
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  for (var x = 0; x < divisions.length; x++) {
    divisions[x].display();
  }
  for (var y = 0; y < divisions.length; y++) {
    divisions[y].display();
  //display the paricles 
  }
}
