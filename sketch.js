let square;
let obstacle1;
let obstacle2;

let canvasWidth = 400;
let canvasHeight = 400;

let mov = 10;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  square = new Square(0, 0, 50, 50, color(255, 0, 0));
  obstacle1 = new Square(50, 50, 30, 30, color(255, 255, 0));
  obstacle2 = new Square(230, 250, 70, 70, color(0, 225, 255));
}

function draw() {
  background(220);
  square.display();
  obstacle1.display();
  obstacle2.display();
  let obstacles = [obstacle1, obstacle2];
  square.update(obstacles);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    square.leftArrow();
  } else if (keyCode === RIGHT_ARROW) {
    square.rightArrow();
  } else if (keyCode === UP_ARROW) {
    square.upArrow();
  } else if (keyCode === DOWN_ARROW) {
    square.downArrow();
  }
}

class Square {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  update(objects) {
    this.isCollisionX();
    this.isCollisionY();
    this.isCollisionObj(objects)
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }

  leftArrow() {
    this.x -= mov;
  }

  rightArrow() {
    this.x += mov;
  }

  upArrow() {
    this.y -= mov;
  }

  downArrow() {
    this.y += mov;
  }

  isCollisionX() {
    if (this.x < 0) {
      this.x += mov;
    } else if (this.x + this.width > canvasWidth) {
      this.x -= mov;
    }
  }

  isCollisionY() {
    if (this.y < 0) {
      this.y += mov;
    } else if (this.y + this.height > canvasHeight) {
      this.y -= mov;
    }
  }

  isCollisionObj(objects) {
    for (let i = 0; i < objects.length; i++) {
      const obj = objects[i];
      if (
        this.x < obj.x + obj.width &&
        this.x + this.width > obj.x &&
        this.y < obj.y + obj.height &&
        this.y + this.height > obj.y
      ) {
        this.x = this.prevX;
        this.y = this.prevY;
        break; 
      }
    }
    this.prevX = this.x;
    this.prevY = this.y;
  }
}
