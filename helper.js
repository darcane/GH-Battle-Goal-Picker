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
  totalImageCount = imagesBaseGame.length;
  //imagesBaseGame.length + imagesExtended.length + imagesJotl.length;
  let counter = 0;
  //#region Card Back
  loadImage("battleGoals/" + backImage, (img) => {
    back = img;
  });
  //#endregion
  let allLoaded = true;
  for (let i = 0; i < totalImageCount; i++) {
    try {
      let imageData = getItem("gos" + i);
      if (imageData) {
        goalsOnStorage.push({ index: index, data: imageData });
      } else {
        allLoaded = false;
      }
    } catch {
      allLoaded = false;
    }
  }
  if (!allLoaded) {
    //#region Base
    goalsOnStorage = [];
    console.log("Images loading manually");
    for (let i = 0; i < imagesBaseGame.length; i++) {
      let path = "battleGoals/base/" + imagesBaseGame[i];
      loadGoalImage(counter, path);
      counter++;
    }
    //#endregion
    //#region Extended
    // for (let i = 0; i < imagesExtended.length; i++) {
    //   let path = "battleGoals/extended/" + imagesExtended[i];
    //   loadGoalImage(counter, path);
    //   counter++;
    // }
    // //#endregion
    // //#region Jotl
    // for (let i = 0; i < imagesJotl.length; i++) {
    //   let path = "battleGoals/jotl/" + imagesJotl[i];
    //   loadGoalImage(counter, path);
    //   counter++;
    // }
    //#endregion
  } else {
    console.log("Images loading from storage");
    for (let i = 0; i < goalsOnStorage.length; i++) {
      let img;
      let raw = new Image();
      raw.src = goalsOnStorage[i].data;
      raw.onload = () => {
        img = createImage(raw.width, raw.height);
        img.drawingContext.drawImage(raw, 0, 0);
        goalsInit[goalsOnStorage[i].index] = img;
      };
    }
    isLoading = false;
  }
}

// JS - Closure
function loadGoalImage(index, path) {
  loadImage(path, imageLoaded);
  function imageLoaded(img) {
    goalsInit[index] = img;
    img.loadPixels();
    goalsOnStorage.push({ index: index, data: img.canvas.toDataURL() });
    if (goalsInit.length == totalImageCount) {
      isLoading = false;
    }
  }
}

function storeGoalsOnStorage() {
  try {
    for (let i = 0; i < goalsOnStorage.length; i++) {
      storeItem("gos" + goalsOnStorage[i].index, goalsOnStorage[i].data);
    }
  } catch (e) {
    console.log("Couldn't store on local storage:");
    console.log(e);
  }
}
