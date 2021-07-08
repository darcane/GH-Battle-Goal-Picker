let totalImageCount;

function createDoms() {
  seed = createInput();
  seed.attribute("placeholder", "Seed Number");
  seed.parent("inputArea");

  playerNumber = createRadio();
  playerNumber.option("1", "Player 1");
  playerNumber.option("2", "Player 2");
  playerNumber.option("3", "Player 3");
  playerNumber.option("4", "Player 4");
  playerNumber.parent("radioArea");

  button = createButton("Snap!");
  button.addClass("secondary");
  button.parent("btnArea");

  pkgBase = createCheckbox("Gloomhaven Base");
  pkgBase.attribute("role", "switch");
  pkgBase.parent("pkgArea");

  pkgExtended = createCheckbox("Satire's Extended");
  pkgExtended.attribute("role", "switch");
  pkgExtended.parent("pkgArea");

  pkgJotl = createCheckbox("Jaws of the Lion");
  pkgJotl.attribute("role", "switch");
  pkgJotl.parent("pkgArea");
}

function resetArrays() {
  goals = getGoalsWithPackages();
  picks = [];
}

function getGoalsWithPackages() {
  goals = [];
  if (pkgBase.checked()) {
    goals = goals.concat(goalsBase);
  }
  if (pkgExtended.checked()) {
    goals = goals.concat(goalsExtended);
  }
  if (pkgJotl.checked()) {
    goals = goals.concat(goalsJotl);
  }
  return goals;
}

function loadAllImages() {
  totalImageCount =
    imagesBaseGame.length + imagesExtended.length + imagesJotl.length;
  //#region Card Back
  loadImage("battleGoals/" + backImage, (img) => {
    back = img;
  });
  //#endregion
  //#region Base
  for (let i = 0; i < imagesBaseGame.length; i++) {
    let path = "battleGoals/base/" + imagesBaseGame[i];
    loadGoalImage(i, path, goalsBase);
  }
  //#endregion
  //#region Extended
  for (let i = 0; i < imagesExtended.length; i++) {
    let path = "battleGoals/extended/" + imagesExtended[i];
    loadGoalImage(i, path, goalsExtended);
  }
  //#endregion
  //#region Jotl
  for (let i = 0; i < imagesJotl.length; i++) {
    let path = "battleGoals/jotl/" + imagesJotl[i];
    loadGoalImage(i, path, goalsJotl);
  }
  //#endregion
}

// JS - Closure
function loadGoalImage(index, path, into) {
  loadImage(path, imageLoaded);
  function imageLoaded(img) {
    into[index] = img;
    if (loadedNumber() == totalImageCount) {
      isLoading = false;
    }
  }
}

function loadedNumber() {
  return goalsBase.length + goalsExtended.length + goalsJotl.length;
}
