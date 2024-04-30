const sitePreference = document.documentElement.getAttribute("data-default-appearance");
const userPreference = localStorage.getItem("appearance");

function getCSSValue(varName) {
  var cssValue = window.getComputedStyle(document.documentElement).getPropertyValue(varName);
  return "rgb(" + cssValue.replace(/\s+/g, "") + ")";
}

function setThemeColor() {
  var metaThemeColor = document.querySelector("meta[name=theme-color]");
  document.documentElement.classList.contains("dark")
    ? metaThemeColor.setAttribute("content", getCSSValue("--color-neutral-800"))
    : metaThemeColor.setAttribute("content", getCSSValue("--color-neutral"));
  return true;
}

if ((sitePreference === "dark" && userPreference === null) || userPreference === "dark") {
  document.documentElement.classList.add("dark");
  setThemeColor();
}

if (document.documentElement.getAttribute("data-auto-appearance") === "true") {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    userPreference !== "light"
  ) {
    document.documentElement.classList.add("dark");
    setThemeColor();
  }
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    if (event.matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setThemeColor();
  });
}

function add_to_top_elem() {
  var body = document.body;
  var html = document.documentElement;

  const height =
    Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    ) - 150;

  const elem = document.getElementById("to-top");
  if (elem === null || elem === undefined) {
    return;
  }

  elem.hidden = height < window.innerHeight;
}

window.addEventListener("DOMContentLoaded", (event) => {
  add_to_top_elem();
  setThemeColor();
  var switchers = document.querySelectorAll("[id^='appearance-switcher']");
  switchers.forEach((switcher) => {
    switcher.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      setThemeColor();
      localStorage.setItem(
        "appearance",
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    });
    switcher.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      localStorage.removeItem("appearance");
    });
  });
});
