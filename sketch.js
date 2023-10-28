let square;
let obstacle1;

let canvasWidth= 400;
let canvasHeight = 400;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  square = new Square(0, 0, 50, 50);
  obstacle1 = new Square(55, 55, 25, 25);
}

function draw() {
  background(220);
  square.display();
  obstacle1.display();
  square.update();
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
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  update() {
    if (this.isCollisionX()) {
      console.log("good");
    }
    if(this.isCollisionY()) {
      console.log("bad")
      this.y -= 10;
    }
  }

  display() {
    fill(255, 0, 0);
    rect(this.x, this.y, this.width, this.height);
  }

  leftArrow() {
    this.x -= 10;
  }

  rightArrow() {
    this.x += 10;
  }

  upArrow() {
    this.y -= 10;
  }

  downArrow() {
    this.y += 10;
  }

  isCollisionX() {
    return this.x < 0 || this.x + this.width > canvasWidth;
  }

  isCollisionY() {
    return this.y < 0 || this.y + this.height > canvasHeight;
  }
}
