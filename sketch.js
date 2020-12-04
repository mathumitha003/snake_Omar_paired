var snake;
var foodX,foodY;

function setup() {
  createCanvas(800,400);
  snake = new Snake();

  frameRate(3);
}

function draw() {
  background("skyblue");  

  snake.update();

  snake.display();
  fill("yellow");
  rect(foodX,foodY,20,20);  //Create Food along with location and size
  //Keep checking if Game is Over
}

function keyPressed(){      //Code to control snake's direction
  if(keyCode === LEFT_ARROW){
    snake.xdir = -20;
    snake.ydir = 0;
  }
  else if(keyCode === RIGHT_ARROW){
    snake.xdir = 20;
    snake.ydir = 0;
  }
  if(keyCode === UP_ARROW){
    snake.xdir = 0;
    snake.ydir = -20;
  }
  if(keyCode === DOWN_ARROW){
    snake.xdir = 0;
    snake.ydir = 20;
  }
}

