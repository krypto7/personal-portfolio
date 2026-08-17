export {};

declare global {
  interface Window {
    $: JQueryStatic;
    jQuery: JQueryStatic;
    gsap?: {
      registerPlugin: (...plugins: unknown[]) => void;
      to: (...args: unknown[]) => unknown;
      from: (...args: unknown[]) => unknown;
      set: (...args: unknown[]) => unknown;
      killTweensOf?: (target: unknown) => void;
      utils: { toArray: (selector: string) => HTMLElement[] };
      matchMedia: () => { add: (query: string, fn: () => void) => void };
      timeline: (vars?: unknown) => unknown;
    };
    ScrollTrigger?: { refresh: () => void };
    ScrollSmoother?: unknown;
    Swiper?: new (selector: string, options?: unknown) => unknown;
    imagesLoaded?: unknown;
    PureCounter?: new (options?: unknown) => unknown;
    __pixoraReady?: boolean;
    __pixoraBooting?: Promise<void>;
  }
}
