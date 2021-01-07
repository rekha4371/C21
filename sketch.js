var f,m;
var o1,o2;

function setup() {
  createCanvas(800,600);
  f = createSprite(400, 200, 50, 80);
  f.shapeColor = "yellow";
  f.debug = true;
  m = createSprite(400, 400, 80, 30);
  m.shapeColor ="blue";
  m.debug =true;
  o1=createSprite(200,100,50,50);
  o2=createSprite(300,100,50,50);
  o1.shapeColor ="green";
  o2.shapeColor="green";
  o1.debug =true;
  o2.debug = true;
}

function draw() {
  background("black"); 

 if(isTouching(m,o1)) {
   f.shapeColor = "red";
   m.shapeColor = "red";
 }
 else {
  f.shapeColor = "green";
  m.shapeColor = "green";
 }

  m.x = World.mouseX;
  m.y = World.mouseY;

  //console.log(m.x)
//console.log(m.x-f.x)


drawSprites();
}

function isTouching(p1,p2){
if(p1.x - p2.x < p2.width/2 + p1.width/2
&& p2.x - p1.x < p2.width/2 + p1.width/2
&& p1.y - p2.y < p2.height/2 +  p1.height/2
&& p2.y - p1.y < f.height/2 + p1.height/2)
  { 
return true;
}
else{
return false;
}
}
