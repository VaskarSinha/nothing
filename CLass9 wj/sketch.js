var nothing
function setup() {
  createCanvas(1260,608);
  nothing = createSprite(630,304,100,100);
  nothing.shapeColor = "white";
}


function draw() 
{
 
  if(keyIsDown(RIGHT_ARROW)){
    background("red");
     nothing.shapeColor="yellow"; 
    }
if(keyIsDown(LEFT_ARROW)){
  background("yellow"); 
nothing.shapeColor="orange";
  
  }
  if(keyIsDown(UP_ARROW)){
    background("lightblue")  
    nothing.shapeColor="red";
    }
    if(keyIsDown(DOWN_ARROW)){
      background("lightgreen")  
      nothing.shapeColor="lightblue";
      }
      
drawSprites();
}
function mousePressedOver(){
  background("brown")
}


