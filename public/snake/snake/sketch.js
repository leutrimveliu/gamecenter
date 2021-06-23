let s, food, totalScore, beep
const scl = 20
let frameSpeed = 10

function setup() {
  createCanvas(400, 400)
  s = new Snake()
  frameRate(frameSpeed)
console.log('object')
  soundFormats("mp3", "ogg");
  beep = loadSound("assets/beep.mp3");

  pickLocation();
}

function draw() {
  background(51);
  totalScore = s.total;
  s.death();
  s.update();
  s.show();

  if (s.dead) {
    localStorage.setItem("totalScore", totalScore);
    frameSpeed = 10
    frameRate(frameSpeed)
  }

  if (s.eat(food)) {
    pickLocation();
    beep.play();
    if (frameSpeed < 20) {
      frameSpeed += 1      
    }
    frameRate(frameSpeed)
  }

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);

  fill(255, 0, 100, 90);
  textSize(32);
  text(s.total, 10, 30);
}

function pickLocation() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
