import gsap from "gsap";
import { registerGsap } from "./gsap";

export function initProjectHover(root?: HTMLElement | null) {
  registerGsap();

  const wrap = root ?? document.querySelector<HTMLElement>(".px-project-6-wrap");
  if (!wrap) return () => undefined;

  const imageWrapper = wrap.querySelector<HTMLElement>(".px-project-6-img-wrap");
  const imageSlider = wrap.querySelector<HTMLElement>(".px-project-6-img-slider");
  const projectItems = Array.from(wrap.querySelectorAll<HTMLElement>(".px-project-6-item"));

  if (!imageWrapper || !imageSlider || !projectItems.length) return () => undefined;

  const controller = new AbortController();
  const { signal } = controller;
  const movePercent = 100 / imageSlider.children.length;

  gsap.set(imageWrapper, { xPercent: -50, yPercent: -50 });

  projectItems.forEach((item) => {
    item.addEventListener(
      "mouseenter",
      () => {
        projectItems.forEach((project) => project.classList.remove("is-active"));
        item.classList.add("is-active");
        gsap.to(imageWrapper, { opacity: 1, duration: 0.5, ease: "power2.out" });
      },
      { signal },
    );

    item.addEventListener(
      "mouseleave",
      () => {
        projectItems.forEach((project) => project.classList.add("is-active"));
        gsap.to(imageWrapper, { opacity: 0, duration: 0.5, ease: "power2.in" });
      },
      { signal },
    );

    item.addEventListener(
      "mousemove",
      () => {
        gsap.to(imageSlider, {
          y: `-${movePercent * Number(item.dataset.indexNumber)}%`,
          duration: 0.6,
          ease: "power2.out",
        });
      },
      { signal },
    );
  });

  wrap.addEventListener(
    "mousemove",
    (event) => {
      const rect = wrap.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const clone = imageWrapper.cloneNode(true) as HTMLElement;
      clone.classList.add("px-project-6-ghost");
      clone.style.position = "absolute";
      clone.style.pointerEvents = "none";
      clone.style.opacity = "0.4";
      clone.style.top = "0";
      clone.style.left = "0";
      clone.style.transform = "translate(-50%, -50%)";
      wrap.appendChild(clone);

      gsap.set(clone, { x, y, scale: 0.9, xPercent: -50, yPercent: -50 });
      gsap.to(clone, {
        opacity: 0,
        scale: 1.2,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => clone.remove(),
      });

      gsap.to(imageWrapper, {
        x,
        y,
        xPercent: -50,
        yPercent: -50,
        duration: 0.3,
        ease: "power3.out",
        overwrite: "auto",
      });
    },
    { signal },
  );

  return () => {
    controller.abort();
    gsap.killTweensOf(imageWrapper);
    gsap.killTweensOf(imageSlider);
    wrap.querySelectorAll(".px-project-6-ghost").forEach((node) => node.remove());
  };
}
