(function () {
  "use strict";
  var sticky = document.querySelector(".wa-sticky");
  var cta = document.querySelector("#pedir");
  var desktop = window.matchMedia("(min-width: 900px)");
  var ctaVisible = false;

  function sync() {
    if (!sticky) return;
    sticky.hidden = desktop.matches || ctaVisible;
  }

  if (sticky && cta && "IntersectionObserver" in window) {
    var watcher = new IntersectionObserver(
      function (entries) {
        ctaVisible = entries[0].isIntersecting;
        sync();
      },
      { threshold: 0.35 }
    );
    watcher.observe(cta);
  }

  if (typeof desktop.addEventListener === "function") {
    desktop.addEventListener("change", sync);
  }
  sync();
})();
