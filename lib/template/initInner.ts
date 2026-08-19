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

  const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 992;
  if (isTouch) return () => undefined;

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
