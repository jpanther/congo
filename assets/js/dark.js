function loadPreferredAppearance() {
  if (
    localStorage.preferredAppearance === "dark" ||
    (!("preferredAppearance" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

function setPreferredAppearance(scheme) {
  if (scheme == "default") {
    localStorage.removeItem("preferredAppearance");
  } else {
    localStorage.preferredAppearance = scheme;
  }
  loadPreferredAppearance();
}

window.addEventListener("DOMContentLoaded", (event) => {
  // Hook up toggle events
  darkToggle = document.getElementById("dark-toggle");
  if (darkToggle) {
    darkToggle.addEventListener("click", function (e) {
      e.preventDefault();
      setPreferredAppearance("dark");
    });
    darkToggle.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      setPreferredAppearance("default");
    });
  }
  lightToggle = document.getElementById("light-toggle");
  if (lightToggle) {
    lightToggle.addEventListener("click", function (e) {
      e.preventDefault();
      setPreferredAppearance("light");
    });
    lightToggle.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      setPreferredAppearance("default");
    });
  }

  // Load user's preset preference (if any)
  loadPreferredAppearance();

  // Allow browser media overrides
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", loadPreferredAppearance);
});
