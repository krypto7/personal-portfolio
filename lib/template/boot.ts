import { loadScript } from "./loadScript";

/**
 * Template boot sequence
 *
 * npm packages (installed): jquery, bootstrap, swiper, gsap,
 * imagesloaded, isotope-layout, magnific-popup, jquery-nice-select
 *
 * Runtime uses jQuery from npm, then the original template vendor files
 * so `main.js` and `slider-active.js` keep their expected globals
 * (Swiper, GSAP ScrollSmoother, Magnific Popup, Nice Select, etc.).
 */

const VENDOR_SCRIPTS = [
  "/assets/js/bootstrap-bundle.js",
  "/assets/js/swiper-bundle.js",
  "/assets/js/magnific-popup.js",
  "/assets/js/nice-select.js",
  "/assets/js/purecounter.js",
  "/assets/js/isotope-pkgd.js",
  "/assets/js/plugin.js",
  "/assets/js/ripple-2.js",
  "/assets/js/imagesloaded-pkgd.js",
  "/assets/js/ajax-form.js",
  "/assets/js/matter.js",
  "/assets/js/throwable.js",
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
}

export async function bootTemplate() {
  if (window.__pixoraReady) {
    applyTemplateAttributes();
    window.ScrollTrigger?.refresh?.();
    return;
  }

  if (window.__pixoraBooting) {
    await window.__pixoraBooting;
    applyTemplateAttributes();
    window.ScrollTrigger?.refresh?.();
    return;
  }

  window.__pixoraBooting = (async () => {
    const jqueryModule = await import("jquery");
    const jquery = (jqueryModule.default ?? jqueryModule) as JQueryStatic;
    window.$ = window.jQuery = jquery;

    for (const src of VENDOR_SCRIPTS) {
      await loadScript(src);
    }

    applyTemplateAttributes();
    window.__pixoraReady = true;
    window.dispatchEvent(new Event("pixora-ready"));
  })();

  await window.__pixoraBooting;
}
