/* NSLC floating music player. Native HTML5 audio; no tracking or external dependencies. */
(() => {
  "use strict";
  const src = "/assets/audio/Our%20Land%2C%20Our%20Voices%2C%20Our%20Future.mp3";
  const title = "Our Land, Our Voices, Our Future";
  const wrap = document.createElement("aside");
  wrap.className = "nslc-audio-player";
  wrap.setAttribute("aria-label", "NDE Sovereign Life Collective music player");
  wrap.hidden = true;
  wrap.innerHTML =
    '<div class="nslc-audio-heading"><span class="nslc-audio-mark" aria-hidden="true">♫</span>' +
    '<div class="nslc-audio-info"><span class="nslc-audio-eyebrow">NSLC MUSIC</span><strong class="nslc-audio-title">Our Land, Our Voices, Our Future</strong></div>' +
    '<button type="button" class="nslc-audio-minimize" aria-label="Minimize music player" aria-expanded="true" title="Minimize music player">−</button></div>' +
    '<div class="nslc-audio-controls"><button type="button" class="nslc-audio-play" aria-label="Play song" title="Play song">▶</button>' +
    '<div class="nslc-audio-timeline"><input class="nslc-audio-seek" type="range" min="0" max="100" value="0" aria-label="Song position" step="0.1">' +
    '<div class="nslc-audio-times"><span class="nslc-audio-current">0:00</span><span class="nslc-audio-duration">0:00</span></div></div>' +
    '<button type="button" class="nslc-audio-mute" aria-label="Mute audio" title="Mute audio">♪</button></div>' +
    '<p class="nslc-audio-error" role="status" hidden></p>';
  const audio = document.createElement("audio");
  audio.preload = "metadata";
  audio.src = src;
  audio.setAttribute("aria-label", title);
  wrap.appendChild(audio);
  document.body.appendChild(wrap);
  const $ = selector => wrap.querySelector(selector);
  const play = $(".nslc-audio-play");
  const seek = $(".nslc-audio-seek");
  const current = $(".nslc-audio-current");
  const duration = $(".nslc-audio-duration");
  const mute = $(".nslc-audio-mute");
  const minimize = $(".nslc-audio-minimize");
  const error = $(".nslc-audio-error");
  const format = seconds => {
    if (!Number.isFinite(seconds)) return "0:00";
    const value = Math.floor(seconds);
    return Math.floor(value / 60) + ":" + String(value % 60).padStart(2, "0");
  };
  const refresh = () => {
    const playing = !audio.paused && !audio.ended;
    play.textContent = playing ? "Ⅱ" : "▶";
    play.setAttribute("aria-label", playing ? "Pause song" : "Play song");
    play.setAttribute("title", playing ? "Pause song" : "Play song");
    seek.value = audio.duration ? String((audio.currentTime / audio.duration) * 100) : "0";
    current.textContent = format(audio.currentTime);
    duration.textContent = format(audio.duration);
    mute.textContent = audio.muted ? "×" : "♪";
    mute.setAttribute("aria-label", audio.muted ? "Unmute audio" : "Mute audio");
  };
  audio.addEventListener("loadedmetadata", () => {
    if (!Number.isFinite(audio.duration) || audio.duration <= 0) return;
    wrap.hidden = false;
    document.body.classList.add("has-nslc-audio");
    refresh();
  });
  audio.addEventListener("error", () => {
    if (wrap.hidden) return; // Hide unavailable music rather than expose a broken player.
    error.hidden = false;
    error.textContent = "This recording is temporarily unavailable.";
  });
  ["play", "pause", "ended", "timeupdate", "durationchange", "volumechange"].forEach(event => audio.addEventListener(event, refresh));
  play.addEventListener("click", async () => {
    if (!audio.paused) { audio.pause(); return; }
    try { await audio.play(); error.hidden = true; }
    catch (_) { error.hidden = false; error.textContent = "Unable to play this recording. Please try again."; }
  });
  seek.addEventListener("input", () => {
    if (audio.duration) audio.currentTime = audio.duration * (Number(seek.value) / 100);
  });
  mute.addEventListener("click", () => { audio.muted = !audio.muted; });
  minimize.addEventListener("click", () => {
    const collapsed = wrap.classList.toggle("is-compact");
    minimize.textContent = collapsed ? "+" : "−";
    minimize.setAttribute("aria-expanded", String(!collapsed));
    minimize.setAttribute("aria-label", collapsed ? "Expand music player" : "Minimize music player");
  });

  // Keep the same audio element alive across ordinary internal page navigation.
  // Navigation falls back to normal links whenever content cannot be fetched.
  let navigated = false;
  let sequence = 0;
  const nav = document.querySelector(".site-nav");
  const dialog = document.getElementById("image-dialog");
  const bindNewImages = () => {
    if (!dialog || typeof dialog.showModal !== "function") return;
    document.querySelectorAll("[data-lightbox-src]:not([data-audio-nav-image])").forEach(button => {
      if (button.dataset.lightboxBound) return;
      button.dataset.audioNavImage = "true";
      button.addEventListener("click", () => {
        const img = dialog.querySelector(".lightbox-image");
        img.src = button.dataset.lightboxSrc;
        img.alt = button.dataset.lightboxAlt || "Expanded concept illustration";
        dialog.querySelector(".lightbox-caption").textContent = button.dataset.lightboxCaption || "";
        if (!dialog.open) dialog.showModal();
      });
    });
  };
  const refreshPage = newDoc => {
    const incoming = newDoc.querySelector("main#main");
    const existing = document.querySelector("main#main");
    if (!incoming || !existing) throw new Error("Missing main section");
    existing.replaceWith(incoming);
    document.title = newDoc.title;
    const bodyClass = newDoc.body.className;
    document.body.className = bodyClass;
    document.body.classList.add("has-nslc-audio");
    if (nav) {
      const nextNav = newDoc.querySelector(".site-nav");
      if (nextNav) nav.innerHTML = nextNav.innerHTML;
      nav.classList.remove("is-open");
      document.querySelector(".menu-toggle")?.setAttribute("aria-expanded", "false");
      nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("is-open")));
    }
    ["meta[name='description']", "link[rel='canonical']", "meta[property='og:url']", "meta[property='og:title']", "meta[property='og:description']"].forEach(selector => {
      const oldTag = document.head.querySelector(selector);
      const newTag = newDoc.head.querySelector(selector);
      if (oldTag && newTag) oldTag.replaceWith(newTag);
    });
    bindNewImages();
    if (location.pathname.endsWith("/resources.html")) {
      if (window.NSLCWordsearchLoaded) {
        document.dispatchEvent(new Event("nslc:pagechange"));
      } else {
        const script = document.createElement("script");
        script.src = "/assets/js/indigenous-wordsearch.js";
        script.onload = () => document.dispatchEvent(new Event("nslc:pagechange"));
        document.body.appendChild(script);
      }
    } else {
      document.dispatchEvent(new Event("nslc:pagechange"));
    }
  };
  const navigate = async (url, fromHistory) => {
    const id = ++sequence;
    try {
      const response = await fetch(url.pathname + url.search, {headers: {"Accept":"text/html"}});
      if (!response.ok || !(response.headers.get("content-type") || "").includes("text/html")) throw new Error("Page unavailable");
      const nextDoc = new DOMParser().parseFromString(await response.text(), "text/html");
      if (id !== sequence) return;
      if (!nextDoc.querySelector("main#main")) throw new Error("Page incomplete");
      if (!fromHistory) history.pushState({nslcAudioNavigation:true}, "", url.href);
      refreshPage(nextDoc);
      if (url.hash) document.getElementById(decodeURIComponent(url.hash.slice(1)))?.scrollIntoView();
      else window.scrollTo({top:0,behavior:"instant"});
      navigated = true;
    } catch (_) {
      window.location.href = url.href;
    }
  };
  document.addEventListener("click", event => {
    if (audio.paused || wrap.hidden || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const anchor = event.target.closest("a[href]");
    if (!anchor || anchor.hasAttribute("download") || (anchor.target && anchor.target !== "_self")) return;
    const url = new URL(anchor.href, window.location.href);
    if (url.origin !== location.origin || !(/\/$|\.html$/).test(url.pathname)) return;
    if (url.pathname === location.pathname && url.search === location.search) return;
    event.preventDefault();
    navigate(url, false);
  });
  window.addEventListener("popstate", () => {
    if (navigated) navigate(new URL(window.location.href), true);
  });
})();