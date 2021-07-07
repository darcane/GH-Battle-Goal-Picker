let totalImageCount;

function createDoms() {
  seed = createInput();
  button = createButton("Snap!");
  playerNumber = createRadio();
  playerNumber.option("1");
  playerNumber.option("2");
  playerNumber.option("3");
  playerNumber.option("4");
}

function resetArrays() {
  goals = goalsInit;
  picks = [];
}

function loadAllImages() {
  totalImageCount =
    imagesBaseGame.length + imagesExtended.length + imagesJotl.length;
  let counter = 0;
  //#region Card Back
  loadImage("battleGoals/" + backImage, (img) => {
    back = img;
  });
  //#endregion
  //#region Base
  for (let i = 0; i < imagesBaseGame.length; i++) {
    let path = "battleGoals/base/" + imagesBaseGame[i];
    loadGoalImage(counter, path);
    counter++;
  }
  //#endregion
  //#region Extended
  for (let i = 0; i < imagesExtended.length; i++) {
    let path = "battleGoals/extended/" + imagesExtended[i];
    loadGoalImage(counter, path);
    counter++;
  }
  //#endregion
  //#region Jotl
  for (let i = 0; i < imagesJotl.length; i++) {
    let path = "battleGoals/jotl/" + imagesJotl[i];
    loadGoalImage(counter, path);
    counter++;
  }
  //#endregion
}

// JS - Closure
function loadGoalImage(index, path) {
  loadImage(path, imageLoaded);
  function imageLoaded(img) {
    goalsInit[index] = img;
    if (goalsInit.length == totalImageCount) {
      isLoading = false;
    }
  }
}
