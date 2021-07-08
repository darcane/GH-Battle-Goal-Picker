function showLoading() {
  push();

  background(51);
  noFill();
  strokeWeight(2);
  let x = 150;

  rect(x, height / 2, width - 2 * x, 20);
  fill(0, 200, 0);
  noStroke();
  w = (width - 2 * x) * (loadedNumber() / totalImageCount);
  rect(x, height / 2, w, 20);

  fill(255);
  text("Loading Images...", x, height / 2 - 5);
  pop();
}

function showWelcome() {
  push();
  background(51);
  fill(255);
  textSize(24);
  text("Welcome to GloomHaven Battle Goal Picker", 50, 100);
  textSize(16);
  text("- Please enter a seed number", 50, 150);
  text("- Then select player number", 50, 170);
  text("- Select your desired packages", 50, 190);
  text("- Hit Snap!", 50, 210);
  text("- Select your desired battle goal", 50, 230);
  pop();
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
      showError("Please select a player number");
      picksShown = false;
      break;
  }
}

// Debugger function
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

function showError(message) {
  background(51);
  fill(255);
  text(message, 50, height / 2);
}
