import { initFadeAnimations } from "./initHome";

type SwiperInstance = { destroy: (deleteInstance?: boolean, cleanStyles?: boolean) => void };

type RipplesJQuery = JQuery<HTMLElement> & {
  ripples: (commandOrOptions?: string | Record<string, unknown>) => JQuery;
};

export function whenTemplateReady(callback: () => void) {
  if (window.__pixoraReady) {
    callback();
    return () => undefined;
  }

  const onReady = () => callback();
  window.addEventListener("pixora-ready", onReady, { once: true });
  return () => window.removeEventListener("pixora-ready", onReady);
}

export function initProjectRipples() {
  const $ = window.jQuery;
  if (!$) return () => undefined;

  const containers = Array.from(document.querySelectorAll<HTMLElement>(".ripple-image"));

  function applyRipples() {
    containers.forEach((el) => {
      const $el = $(el) as RipplesJQuery;
      if ($el.data("ripples")) return;

      const img = el.querySelector("img");
      const imgURL = img?.getAttribute("src");
      if (!imgURL) return;

      el.style.backgroundImage = `url(${imgURL})`;
      el.style.backgroundSize = "cover";
      el.style.backgroundPosition = "center center";

      try {
        $el.ripples({
          resolution: 400,
          perturbance: 0.03,
          imageUrl: imgURL,
        });
        img?.style.setProperty("display", "none");
      } catch {
        // WebGL can be unavailable in some browsers.
      }
    });
  }

  const images = containers
    .map((el) => el.querySelector("img"))
    .filter((img): img is HTMLImageElement => Boolean(img));

  if (images.every((img) => img.complete)) {
    applyRipples();
  } else {
    void Promise.all(
      images.map((img) => (img.decode ? img.decode().catch(() => undefined) : Promise.resolve())),
    ).then(applyRipples);
  }

  return () => {
    containers.forEach((el) => {
      const $el = $(el) as RipplesJQuery;
      try {
        $el.ripples("destroy");
      } catch {
        // Already destroyed or never initialized.
      }
    });
  };
}

export function initProjectDetailsSlider() {
  const Swiper = window.Swiper;
  const el = document.querySelector(".px-pd-2-active");
  if (!Swiper || !el) return () => undefined;

  const existing = el as HTMLElement & { swiper?: SwiperInstance };
  existing.swiper?.destroy(true, true);

  const instance = new Swiper(".px-pd-2-active", {
    slidesPerView: 3,
    loop: true,
    autoplay: false,
    spaceBetween: 20,
    speed: 1000,
    pagination: {
      el: ".px-pd-2-dot",
      clickable: true,
    },
    breakpoints: {
      1600: { slidesPerView: 3 },
      1400: { slidesPerView: 3 },
      1200: { slidesPerView: 3 },
      992: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
      576: { slidesPerView: 1 },
      0: { slidesPerView: 1 },
    },
  }) as SwiperInstance;

  initFadeAnimations();
  window.ScrollTrigger?.refresh?.();

  return () => {
    instance.destroy(true, true);
  };
}
