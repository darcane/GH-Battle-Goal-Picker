let themeSwitcher;
let theme;

let testImage;

function handleTheme() {
  theme = "dark";
  select("html").attribute("data-theme", theme);

  themeSwitcher = createButton("");
  themeSwitcher.addClass("switcher outline");
  themeSwitcher.mousePressed(themeSwitch);
  themeSwitcher.style("background-image", "url('../assets/icons/sunIcon.png')");
}

function themeSwitch() {
  let htmlBody = select("html");
  switch (theme) {
    case "dark":
      theme = "light";
      themeSwitcher.style(
        "background-image",
        "url('../assets/icons/darkIcon.png')"
      );
      break;
    case "light":
    default:
      theme = "dark";
      themeSwitcher.style(
        "background-image",
        "url('../assets/icons/sunIcon.png')"
      );
      break;
  }
  htmlBody.attribute("data-theme", theme);
}
