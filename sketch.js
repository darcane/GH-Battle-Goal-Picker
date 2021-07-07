const goalsBase = [];
const goalsExtended = [];
const goalsJotl = [];
let back;
let goals = [];
let picks = [];

let seed;
let playerNumber;
let button;
let pkgBase;
let pkgExtended;
let pkgJotl;

let picksShown = false;
let isLoading = true;

function setup() {
  createCanvas(640, 480);
  background(51);

  loadAllImages();
  createDoms();
  button.mousePressed(btnPress);
}

function draw() {
  if (isLoading) {
    showLoading();
  } else {
    showWelcome();
    noLoop();
  }
}

function btnPress() {
  resetArrays();
  if (goals.length === 0) {
    showError("Please select a package from down below");
    return;
  }
  let seedVal = seed.value();
  if (seedVal === "") {
    seedVal = Math.floor(random(1, 10000));
  }

  randomSeed(seedVal);
  goals = shuffle(goals);

  for (let i = 0; i < 8; i++) {
    let pick = random(goals);
    if (picks.includes(pick)) {
      i--;
    } else {
      picks.push(pick);
    }
  }

  showPicks();
}

function mouseReleased() {
  if (picksShown) {
    if (mouseY > 0 && mouseY < height) {
      if (mouseX < width / 2 && mouseX > 0) {
        showPicks();
        image(back, 320, 0, 320, 480);
      } else if (mouseX > width / 2 && mouseX < width) {
        showPicks();
        image(back, 0, 0, 320, 480);
      }
    }
  }
}
