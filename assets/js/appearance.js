const browserIsDark =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const userPreference = localStorage.getItem("appearance");
const switcher = document.getElementById("appearance-switcher");

if (
  (browserIsDark && userPreference === null) ||
  (browserIsDark && userPreference === "dark") ||
  userPreference === "dark"
) {
  document.documentElement.classList.add("dark");
}

if (document.documentElement.getAttribute("data-auto-appearance") === "true") {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    if (event.matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
}

window.addEventListener("DOMContentLoaded", (event) => {
  switcher.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
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
