class Game {

  drawGrid() {
    clear();
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    //line(x1, y1, x2, y2)
    
    //----gridborders
    //top horizontal: (0/0) -> (0/width)
    line(0, 0, 0, WIDTH)

    //bottom horizontal: (HEIGHT,0) -> (height,width)
    line(HEIGHT, 0, HEIGHT, WIDTH) 

    //left vertical: (0/0) -> (heigth/0)
    line(0, 0, HEIGHT, 0)

    //right vertical:(HEIGHT,0) -> (height,width)
    line(0, WIDTH, HEIGHT, WIDTH) 

    //makeGrid    
    const numLines = 10;
    const betweenGridVerticals = WIDTH/numLines;
    const betweenGridHorizontals = HEIGHT/numLines;

    for (let i = 0; i<numLines; i++) {
      //horizontals
      line(betweenGridHorizontals*i, 0, betweenGridHorizontals*i, WIDTH);

      //verticals
      line(0, betweenGridVerticals*i, HEIGHT, betweenGridVerticals*i)
    }

}
}

class Player {
  constructor() {
      this.col = 0;
      this.row = 0;
      this.image;
  }

  preload() {
    this.image = loadImage('/assets/character-down.png')
  }

  moveUp() {
    this.row -= 5;
  }
  moveDown() {
    this.row += 5;
  }
  moveLeft(){
    this.col -= 5;
  }
  moveRight(){
    this.col += 5;
  }

  draw() {
    this.col = constrain(this.col, 0, (width - 100))
    this.row = constrain(this.row, 0, (height - 100))

    image(this.image, this.col, this.row, 100, 100);
   
    if (keyIsDown(UP_ARROW)) {
      this.moveUp()
      this.image = loadImage('/assets/character-up.png');
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.moveDown()
      this.image = loadImage('/assets/character-down.png');
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.moveLeft()
      this.image = loadImage('/assets/character-left.png');
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.moveRight()
      this.image = loadImage('/assets/character-right.png');
    }

  }

}

class Treasure {

  constructor() {
    this.col = 0;
    this.row = 0;
  }

  preload() {
    this.image = loadImage('/assets/treasure.png')
  }
  setRandomPosition() {
    
     this.col = Math.floor(Math.random() * 10)*100;
     this.row = Math.floor(Math.random() * 10)*100;

  }

  draw() {
    image(this.image, this.col, this.row, 100, 100);
  }

}
