import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { registerGsap } from "./gsap";

export function startLenis() {
  registerGsap();

  if (window.__pixoraLenis) {
    refreshLenis();
    return window.__pixoraLenis;
  }

  const isTouch = window.matchMedia("(pointer: coarse)").matches;

  const lenis = new Lenis({
    autoRaf: false,
    lerp: isTouch ? 0.18 : 0.1,
    smoothWheel: !isTouch,
    syncTouch: false,
    touchMultiplier: 1,
    anchors: true,
    allowNestedScroll: true,
    naiveDimensions: false,
    stopInertiaOnNavigate: true,
    prevent: (node) =>
      node.hasAttribute("data-lenis-prevent") ||
      node.closest("[data-lenis-prevent]") != null,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  const onViewportResize = () => {
    lenis.resize();
    ScrollTrigger.refresh();
  };

  window.visualViewport?.addEventListener("resize", onViewportResize);
  window.addEventListener("orientationchange", onViewportResize);

  window.__pixoraLenis = lenis;
  window.dispatchEvent(new Event("pixora-lenis"));
  initParallaxSpeeds();

  return lenis;
}

export function refreshLenis() {
  const lenis = window.__pixoraLenis;
  if (!lenis) return;

  lenis.resize();
  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
    initParallaxSpeeds();
  });
}

export function scrollToTop(duration = 0.8) {
  const lenis = window.__pixoraLenis;
  if (lenis) {
    lenis.scrollTo(0, { duration });
    return;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initParallaxSpeeds() {
  if (!window.matchMedia("(min-width: 992px)").matches) return;

  document.querySelectorAll<HTMLElement>("[data-speed]").forEach((el) => {
    if (el.dataset.speedBound === "true") return;

    const speed = Number(el.dataset.speed);
    if (!Number.isFinite(speed) || speed === 1) return;

    el.dataset.speedBound = "true";
    const distance = (1 - speed) * 140;

    gsap.fromTo(
      el,
      { y: -distance },
      {
        y: distance,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement ?? el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  });
}
