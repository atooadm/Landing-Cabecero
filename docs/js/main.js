/* Drop-in media, nav highlight, and the mobile WhatsApp bar. */
(function () {
  "use strict";

  var IMAGE_EXT = ["webp", "jpg", "jpeg", "png"];
  var VIDEO_EXT = ["mp4", "webm"];

  function titleOf(slot) {
    var node = slot.querySelector(".media-slot__title");
    return node ? node.textContent.trim() : "Video del cabecero";
  }

  function showImage(slot, url) {
    var frame = slot.querySelector(".media-slot__frame");
    var img = document.createElement("img");
    img.className = "media-slot__img";
    img.alt = "";
    img.decoding = "async";
    img.src = url;
    frame.appendChild(img);
    slot.classList.add("is-ready");
  }

  function probeImage(slot, index) {
    var base = slot.getAttribute("data-base");
    if (!base || index >= IMAGE_EXT.length) return;
    var url = base + "." + IMAGE_EXT[index];
    var probe = new Image();
    probe.onload = function () {
      showImage(slot, url);
    };
    probe.onerror = function () {
      probeImage(slot, index + 1);
    };
    probe.src = url;
  }

  function probeVideo(slot) {
    var base = slot.getAttribute("data-base");
    var frame = slot.querySelector(".media-slot__frame");
    var index = 0;
    var video = document.createElement("video");
    video.className = "media-slot__img";
    video.controls = true;
    video.preload = "metadata";
    video.playsInline = true;
    video.setAttribute("aria-label", titleOf(slot));

    function tryNext() {
      if (index >= VIDEO_EXT.length) return;
      video.src = base + "." + VIDEO_EXT[index];
      index += 1;
    }

    video.addEventListener("loadedmetadata", function () {
      if (!slot.classList.contains("is-ready")) {
        frame.appendChild(video);
        slot.classList.add("is-ready");
      }
    });
    video.addEventListener("error", function () {
      if (!slot.classList.contains("is-ready")) tryNext();
    });
    tryNext();
  }

  document.querySelectorAll(".media-slot").forEach(function (slot) {
    if (slot.getAttribute("data-kind") === "video") {
      probeVideo(slot);
      return;
    }
    probeImage(slot, 0);
  });

  var links = Array.prototype.slice.call(document.querySelectorAll(".nav-list a"));
  var sections = links
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = "#" + entry.target.id;
          links.forEach(function (link) {
            if (link.getAttribute("href") === id) {
              link.setAttribute("aria-current", "true");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        });
      },
      { rootMargin: "-45% 0px -48% 0px", threshold: 0 }
    );
    sections.forEach(function (section) {
      spy.observe(section);
    });
  }

  var sticky = document.querySelector(".wa-sticky");
  var cta = document.querySelector("#pedir");
  var desktop = window.matchMedia("(min-width: 960px)");
  var ctaVisible = false;

  function syncSticky() {
    if (!sticky) return;
    sticky.hidden = desktop.matches || ctaVisible;
  }

  if (sticky && cta && "IntersectionObserver" in window) {
    var watcher = new IntersectionObserver(
      function (entries) {
        ctaVisible = entries[0].isIntersecting;
        syncSticky();
      },
      { threshold: 0.4 }
    );
    watcher.observe(cta);
  }

  if (typeof desktop.addEventListener === "function") {
    desktop.addEventListener("change", syncSticky);
  }
  syncSticky();
})();
