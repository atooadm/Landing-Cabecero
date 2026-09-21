(function () {
  "use strict";
  var sticky = document.querySelector(".wa-sticky");
  var targets = [
    document.querySelector(".hero .btn-wa"),
    document.querySelector("#pedir")
  ].filter(Boolean);
  var desktop = window.matchMedia("(min-width: 900px)");
  var covering = new Set();

  function sync() {
    if (!sticky) return;
    sticky.hidden = desktop.matches || covering.size > 0;
  }

  if (sticky && targets.length && "IntersectionObserver" in window) {
    var watcher = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) covering.add(entry.target);
          else covering.delete(entry.target);
        });
        sync();
      },
      { threshold: 0.4 }
    );
    targets.forEach(function (el) {
      watcher.observe(el);
    });
  }

  if (typeof desktop.addEventListener === "function") {
    desktop.addEventListener("change", sync);
  }
  sync();
})();
