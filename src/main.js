const game = new Game();
this.player = new Player();
this.treasure = new Treasure();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function preload() {
  console.log('this is preload');
  player.preload();
  treasure.preload();
  treasure.setRandomPosition();
}

function draw() {
  game.drawGrid();
  player.draw();
  treasure.draw();
}

function keyPressed() {
  console.log(keyCode);
  // this is a p5 constant
  if (UP_ARROW) {
      player.moveUp();
  }
  if (DOWN_ARROW) {
      player.moveDown();
  }
  if (LEFT_ARROW) {
      player.moveLeft();
  }
  if (RIGHT_ARROW) {
      player.moveRight();
  }
}


// function drawTreasure() {
// if(player.row === this.row && player.col === this.col) {
//   setRandomPosition()
//   }
// }

