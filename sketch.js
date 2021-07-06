let goalsInit = [];
let goals = [];
let back;

let picks = [];

let seed;
let playerNumber;
let button;

let picksShown = false;

function preload() {
  //#region Card back image
  loadImage("battleGoals/" + backImage, (img) => {
    back = img;
  });
  //#endregion
  //#region All card images
  //#region Base
  for (let i = 0; i < imagesBaseGame.length; i++) {
    let path = "battleGoals/base/" + imagesBaseGame[i];
    let image = loadImage(path);
    goalsInit.push(image);
  }
  //#endregion
  //#region Extended
  for (let i = 0; i < imagesExtended.length; i++) {
    let path = "battleGoals/extended/" + imagesExtended[i];
    let image = loadImage(path);
    goalsInit.push(image);
  }
  //#endregion
  //#region Jotl
  for (let i = 0; i < imagesJotl.length; i++) {
    let path = "battleGoals/jotl/" + imagesJotl[i];
    let image = loadImage(path);
    goalsInit.push(image);
  }
  //#endregion
  goals = goalsInit;
  //#endregion
}

function setup() {
  createCanvas(640, 480);
  background(51);
  noLoop();
  seed = createInput();
  button = createButton("Snap!");
  button.mousePressed(btnPress);
  playerNumber = createRadio();
  playerNumber.option("1");
  playerNumber.option("2");
  playerNumber.option("3");
  playerNumber.option("4");
  resetArrays();
}

function draw() {}

function resetArrays() {
  goals = goalsInit;
  picks = [];
}

function btnPress() {
  resetArrays();

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

function displayPicks() {
  background(51);
  var x = 0,
    y = 0;
  for (let i = 0; i < picks.length; i++) {
    let pick = picks[i];
    image(pick, x, y, 160, 240);
    x += 160;
    if (i == 3) {
      x = 0;
      y += 240;
    }
  }
}

function showPicks() {
  background(51);
  let player = playerNumber.value();
  switch (player) {
    case "1":
      image(picks[0], 0, 0, 320, 480);
      image(picks[1], 320, 0, 320, 480);
      picksShown = true;
      break;
    case "2":
      image(picks[2], 0, 0, 320, 480);
      image(picks[3], 320, 0, 320, 480);
      picksShown = true;
      break;
    case "3":
      image(picks[4], 0, 0, 320, 480);
      image(picks[5], 320, 0, 320, 480);
      picksShown = true;
      break;
    case "4":
      image(picks[6], 0, 0, 320, 480);
      image(picks[7], 320, 0, 320, 480);
      picksShown = true;
      break;
    default:
      text("Please select a player number", 50, height / 2);
      picksShown = false;
      break;
  }
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
