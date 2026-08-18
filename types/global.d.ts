import type Lenis from "lenis";

export {};

declare global {
  interface Window {
    $: JQueryStatic;
    jQuery: JQueryStatic;
    gsap?: {
      registerPlugin: (...plugins: unknown[]) => void;
      to: (...args: unknown[]) => unknown;
      from: (...args: unknown[]) => unknown;
      fromTo: (...args: unknown[]) => unknown;
      set: (...args: unknown[]) => unknown;
      killTweensOf?: (target: unknown) => void;
      ticker: {
        add: (fn: (time: number) => void) => void;
        lagSmoothing: (value: number) => void;
      };
      utils: { toArray: (selector: string) => HTMLElement[] };
      matchMedia: () => { add: (query: string, fn: () => void) => void };
      timeline: (vars?: unknown) => unknown;
    };
    ScrollTrigger?: { refresh: () => void; update?: () => void };
    ScrollToPlugin?: unknown;
    SplitText?: unknown;
    ScrollSmoother?: unknown;
    Swiper?: new (selector: string, options?: unknown) => unknown;
    imagesLoaded?: unknown;
    Isotope?: unknown;
    PureCounter?: new (options?: unknown) => unknown;
    __pixoraLenis?: Lenis;
    __pixoraReady?: boolean;
    __pixoraBooting?: Promise<void>;
  }
}