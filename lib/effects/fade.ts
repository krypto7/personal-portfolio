import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGsap } from "./gsap";

export function initFadeAnimations() {
  registerGsap();

  ScrollTrigger.getAll().forEach((trigger) => {
    const node = trigger.trigger;
    if (node instanceof Node && !document.body.contains(node)) {
      trigger.kill();
    }
  });

  gsap.utils.toArray<HTMLElement>(".px-fade-anim").forEach((item) => {
    if (item.dataset.fadeBound === "true") return;
    item.dataset.fadeBound = "true";

    const offset = Number(item.getAttribute("data-fade-offset") || 40);
    const duration = Number(item.getAttribute("data-duration") || 0.75);
    const direction = item.getAttribute("data-fade-from") || "bottom";
    const delay = Number(item.getAttribute("data-delay") || 0.15);

    gsap.from(item, {
      opacity: 0,
      ease: item.getAttribute("data-ease") || "power2.out",
      duration,
      delay,
      x: direction === "left" ? -offset : direction === "right" ? offset : 0,
      y: direction === "top" ? -offset : direction === "bottom" ? offset : 0,
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
      },
    });
  });
}
