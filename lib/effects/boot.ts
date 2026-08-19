import { initFadeAnimations } from "./fade";
import { registerGsap } from "./gsap";
import { refreshLenis, startLenis } from "./lenis";

export function bootPageEffects() {
  registerGsap();
  startLenis();
  initFadeAnimations();
  refreshLenis();
}
