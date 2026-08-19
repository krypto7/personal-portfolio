import type Lenis from "lenis";

export {};

declare global {
  interface Window {
    __pixoraLenis?: Lenis;
  }
}
