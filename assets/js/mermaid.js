function css(name) {
  return "rgb(" + getComputedStyle(document.documentElement).getPropertyValue(name) + ")";
}

let isDark = document.documentElement.classList.contains("dark");

mermaid.initialize({
  theme: "base",
  themeVariables: {
    background: css("--color-neutral"),
    primaryTextColor: isDark ? css("--color-neutral-200") : css("--color-neutral-700"),
    primaryColor: isDark ? css("--color-primary-700") : css("--color-primary-200"),
    secondaryColor: isDark ? css("--color-secondary-700") : css("--color-secondary-200"),
    tertiaryColor: isDark ? css("--color-neutral-700") : css("--color-neutral-100"),
    primaryBorderColor: isDark ? css("--color-primary-500") : css("--color-primary-400"),
    secondaryBorderColor: css("--color-secondary-400"),
    tertiaryBorderColor: isDark ? css("--color-neutral-300") : css("--color-neutral-400"),
    lineColor: isDark ? css("--color-neutral-300") : css("--color-neutral-600"),
    fontFamily:
      "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,noto sans,sans-serif",
    fontSize: "16px",
    pieTitleTextSize: "19px",
    pieSectionTextSize: "16px",
    pieLegendTextSize: "16px",
    pieStrokeWidth: "1px",
    pieOuterStrokeWidth: "0.5px",
    pieStrokeColor: isDark ? css("--color-neutral-300") : css("--color-neutral-400"),
    pieOpacity: "1",
  },
});

// When mermaidPanZoom is enabled (set via vendor.html from site params),
// add svg-pan-zoom integration and hover-to-show controls to each diagram.
if (window.mermaidPanZoom) {
  (function () {
    var containers = document.querySelectorAll(".mermaid.mermaid-panzoom");
    if (!containers.length) return;

    var panZoomInstances = new Map();
    var preFullscreenState = new Map();

    function applySvgPanZoom(svg, container) {
      if (svg.dataset.panZoomApplied) return;
      svg.dataset.panZoomApplied = "true";

      svg.style.maxWidth = "none";
      svg.removeAttribute("width");
      svg.setAttribute("width", container.clientWidth);
      svg.setAttribute("height", container.clientHeight);
      svg.style.width = "100%";
      svg.style.height = "100%";

      var instance = svgPanZoom(svg, {
        zoomEnabled: true,
        controlIconsEnabled: false,
        fit: true,
        center: true,
        minZoom: 0.5,
        maxZoom: 10,
        zoomScaleSensitivity: 0.3,
      });

      panZoomInstances.set(container, instance);
    }

    function addControls(container) {
      if (container.querySelector(".mermaid-controls")) return;

      // Make container a positioning context for the overlay
      container.style.position = "relative";
      container.style.overflow = "hidden";

      // Toolbar: hidden by default, shown on hover via JS events
      var toolbar = document.createElement("div");
      toolbar.className = "mermaid-controls";
      toolbar.style.cssText =
        "position:absolute;top:8px;right:8px;display:flex;flex-direction:column;gap:2px;" +
        "z-index:10;opacity:0;transition:opacity .2s";

      // Show/hide on container hover
      container.addEventListener("mouseenter", function () { toolbar.style.opacity = "1"; });
      container.addEventListener("mouseleave", function () { toolbar.style.opacity = "0"; });

      var darkMode = document.documentElement.classList.contains("dark");
      var btnStyle =
        "width:28px;height:28px;display:flex;align-items:center;justify-content:center;" +
        "background:rgba(128,128,128,.2);border:1px solid rgba(128,128,128,.35);" +
        "border-radius:4px;cursor:pointer;font-size:14px;line-height:1;" +
        "color:" + (darkMode ? "rgba(200,200,200,.9)" : "rgba(80,80,80,.9)") + ";backdrop-filter:blur(2px)";

      var buttons = [
        { label: "\u26F6", title: "Toggle fullscreen", action: "fullscreen" },
        { label: "+",      title: "Zoom in",           action: "zoomIn" },
        { label: "\u00B7", title: "Reset zoom",        action: "reset" },
        { label: "\u2212", title: "Zoom out",          action: "zoomOut" },
      ];

      buttons.forEach(function (def) {
        var btn = document.createElement("button");
        btn.title = def.title;
        btn.textContent = def.label;
        btn.style.cssText = btnStyle;
        btn.addEventListener("mouseenter", function () {
          btn.style.background = "rgba(128,128,128,.35)";
        });
        btn.addEventListener("mouseleave", function () {
          btn.style.background = "rgba(128,128,128,.2)";
        });
        btn.addEventListener("click", function () {
          var instance = panZoomInstances.get(container);
          if (!instance) return;
          if (def.action === "fullscreen") {
            if (!document.fullscreenElement) {
              var svg = container.querySelector("svg");
              if (svg) {
                preFullscreenState.set(container, {
                  pan: instance.getPan(),
                  zoom: instance.getZoom(),
                  width: svg.getAttribute("width"),
                  height: svg.getAttribute("height"),
                });
              }
              container.requestFullscreen().catch(function () {});
            } else {
              document.exitFullscreen();
            }
          } else if (def.action === "zoomIn") {
            instance.zoomIn();
          } else if (def.action === "zoomOut") {
            instance.zoomOut();
          } else if (def.action === "reset") {
            instance.resetZoom();
            instance.resetPan();
          }
        });
        toolbar.appendChild(btn);
      });

      container.appendChild(toolbar);
    }

    // Fullscreen handling
    document.addEventListener("fullscreenchange", function () {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          if (document.fullscreenElement) {
            var instance = panZoomInstances.get(document.fullscreenElement);
            var svg = document.fullscreenElement.querySelector("svg");
            if (instance && svg) {
              svg.setAttribute("width", document.fullscreenElement.clientWidth);
              svg.setAttribute("height", document.fullscreenElement.clientHeight);
              instance.resize();
              instance.fit();
              instance.center();
            }
            // Keep controls visible in fullscreen, lighten for dark background
            var ctrl = document.fullscreenElement.querySelector(".mermaid-controls");
            if (ctrl) {
              ctrl.style.opacity = "1";
              var btns = ctrl.querySelectorAll("button");
              for (var i = 0; i < btns.length; i++) btns[i].style.color = "rgba(220,220,220,.9)";
            }
          } else {
            preFullscreenState.forEach(function (state, container) {
              var instance = panZoomInstances.get(container);
              var svg = container.querySelector("svg");
              if (instance && svg) {
                svg.setAttribute("width", state.width);
                svg.setAttribute("height", state.height);
                instance.resize();
                instance.zoom(state.zoom);
                instance.pan(state.pan);
              }
              // Restore normal button color
              var ctrl = container.querySelector(".mermaid-controls");
              if (ctrl) {
                var dark = document.documentElement.classList.contains("dark");
                var c = dark ? "rgba(200,200,200,.9)" : "rgba(80,80,80,.9)";
                var btns = ctrl.querySelectorAll("button");
                for (var i = 0; i < btns.length; i++) btns[i].style.color = c;
              }
            });
            preFullscreenState.clear();
          }
        });
      });
    });

    // Observe for async mermaid renders
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeName && node.nodeName.toLowerCase() === "svg") {
            var container = node.closest(".mermaid");
            setTimeout(function () {
              applySvgPanZoom(node, container);
              addControls(container);
            }, 100);
          }
        });
      });
    });

    containers.forEach(function (container) {
      var existingSvg = container.querySelector("svg");
      if (existingSvg) {
        setTimeout(function () {
          applySvgPanZoom(existingSvg, container);
          addControls(container);
        }, 100);
      }
      observer.observe(container, { childList: true });
    });
  })();
}
