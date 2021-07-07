const backImage = "back.png";
const imagesBaseGame = [
  "aggressor.png",
  "diehard.png",
  "dynamo.png",
  "executioner.png",
  "explorer.png",
  "fasthealer.png",
  "hoarder.png",
  "hunter.png",
  "indigent.png",
  "layabout.png",
  "masochist.png",
  "neutralizer.png",
  "opener.png",
  "pacifist.png",
  "plunderer.png",
  "professional.png",
  "protector.png",
  "purist.png",
  "sadist.png",
  "scrambler.png",
  "straggler.png",
  "streamliner.png",
  "workhorse.png",
  "zealot.png",
];
const imagesExtended = [
  "acrobatic.jpg",
  "ambusher.jpg",
  "assassin.jpg",
  "assistant.jpg",
  "bastion.jpg",
  "bully.jpg",
  "contagious.jpg",
  "covetous.jpg",
  "cuddler.jpg",
  "discerning.jpg",
  "distracted.jpg",
  "drowsy.jpg",
  "elitist.jpg",
  "exterminator.jpg",
  "fearful.jpg",
  "feeble.jpg",
  "feral.jpg",
  "finisher.jpg",
  "hesitant.jpg",
  "hothead.jpg",
  "instigator.jpg",
  "insulting.jpg",
  "limping.jpg",
  "lucky.jpg",
  "marksman.jpg",
  "miser.jpg",
  "mugger.jpg",
  "multitasker.jpg",
  "paranoid.jpg",
  "peacemonger.jpg",
  "perforated.jpg",
  "pickpocket.jpg",
  "pincushion.jpg",
  "prosperous.jpg",
  "ravager.jpg",
  "recluse.jpg",
  "reserved.jpg",
  "restless.jpg",
  "retaliator.jpg",
  "ritualistic.jpg",
  "scavenger.jpg",
  "shadow.jpg",
  "sharpshooter.jpg",
  "slayer.jpg",
  "sleepless.jpg",
  "sober.jpg",
  "sociable.jpg",
  "specialized.jpg",
  "stalwart.jpg",
  "stubborn.jpg",
  "thorough.jpg",
  "untouchable.jpg",
  "wasteful.jpg",
  "winded.jpg",
];
const imagesJotl = [
  "acrobat.png",
  "agoraphobe.png",
  "altruist.png",
  "assistant.png",
  "challenger.png",
  "closer.png",
  "conservator.png",
  "diehard.png",
  "egoist.png",
  "fast-healer.png",
  "gambler.png",
  "hothead.png",
  "insomniac.png",
  "masochist.png",
  "mugger.png",
  "opener.png",
  "pacifist.png",
  "pickpocket.png",
  "pincushion.png",
  "plebeian.png",
  "prohibitionist.png",
  "ravager.png",
  "recluse.png",
  "sadist.png",
  "scrambler.png",
  "shadow.png",
  "shirker.png",
  "specialist.png",
  "straggler.png",
  "trailblazer.png",
  "transmitter.png",
  "weakling.png",
];
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

function loadAllImages() {
  totalImageCount =
    imagesBaseGame.length + imagesExtended.length + imagesJotl.length;
  let counter = 0;
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

function showLoading() {
  push();

  background(51);
  noFill();
  strokeWeight(2);
  let x = 150;

  rect(x, height / 2, width - 2 * x, 20);
  fill(0, 200, 0);
  noStroke();
  w = (width - 2 * x) * (goalsInit.length / totalImageCount);
  rect(x, height / 2, w, 20);

  fill(255);
  text("Loading Images...", x, height / 2 - 5);
  pop();
}

function showWelcome() {
  push();
  background(51);
  pop();
}
