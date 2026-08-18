import { registerTemplateLibraries } from "./libs";
import { refreshLenis, startLenis } from "./lenis";
import { loadScript } from "./loadScript";

/**
 * Template boot sequence
 *
 * Libraries come from npm (jquery, gsap, swiper, bootstrap, etc.).
 * Only template-specific files from /public/assets/js are loaded as scripts:
 * nice-select.js, ripple-2.js, slider-active.js, and main.js.
 */

const TEMPLATE_SCRIPTS = [
  "/assets/js/nice-select.js",
  "/assets/js/ripple-2.js",
  "/assets/js/slider-active.js",
  "/assets/js/main.js",
];

export function applyTemplateAttributes() {
  const $ = window.jQuery;
  if (!$) return;

  $("[data-background]").each(function () {
    const src = $(this).attr("data-background");
    if (src) $(this).css("background-image", `url(${src})`);
  });

  $("[data-width]").each(function () {
    const width = $(this).attr("data-width");
    if (width) $(this).css("width", width);
  });

  $("[data-bg-color]").each(function () {
    const color = $(this).attr("data-bg-color");
    if (color) $(this).css("background-color", color);
  });

  const niceSelect = (
    $ as JQueryStatic & { fn: JQueryStatic["fn"] & { niceSelect?: () => JQuery } }
  ).fn.niceSelect;

  if (niceSelect) {
    $(".px-select").each(function () {
      if (!$(this).next().hasClass("nice-select")) {
        niceSelect.call($(this));
      }
    });
  }
}

export async function bootTemplate() {
  if (window.__pixoraReady) {
    applyTemplateAttributes();
    refreshLenis();
    return;
  }

  if (window.__pixoraBooting) {
    await window.__pixoraBooting;
    applyTemplateAttributes();
    refreshLenis();
    return;
  }

  window.__pixoraBooting = (async () => {
    await registerTemplateLibraries();
    startLenis();

    for (const src of TEMPLATE_SCRIPTS) {
      await loadScript(src);
    }

    applyTemplateAttributes();
    window.__pixoraReady = true;
    window.dispatchEvent(new Event("pixora-ready"));
  })();

  await window.__pixoraBooting;
}
