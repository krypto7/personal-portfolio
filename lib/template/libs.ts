import type gsap from "gsap";
import type { ScrollToPlugin } from "gsap/ScrollToPlugin";
import type { ScrollTrigger } from "gsap/ScrollTrigger";
import type { SplitText } from "gsap/SplitText";
import type Isotope from "isotope-layout";
import type Swiper from "swiper";

function unwrapDefault<T>(mod: T | { default: T }): T {
  if (mod && typeof mod === "object" && "default" in (mod as object)) {
    return ((mod as { default: T }).default ?? mod) as T;
  }
  return mod as T;
}

function pickNamed<T>(mod: unknown, name: string): T {
  const record = (mod ?? {}) as Record<string, unknown>;
  if (record[name]) return record[name] as T;

  const nested = record.default as Record<string, unknown> | undefined;
  if (nested?.[name]) return nested[name] as T;

  return unwrapDefault(mod as T | { default: T });
}

export async function registerTemplateLibraries() {
  const jqueryModule = await import("jquery");
  const jquery = unwrapDefault(jqueryModule) as JQueryStatic;
  window.$ = window.jQuery = jquery;

  const [
    gsapModule,
    scrollTriggerModule,
    scrollToModule,
    splitTextModule,
    swiperModule,
    imagesLoadedModule,
    isotopeModule,
    bridgetModule,
    pureCounterModule,
  ] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
    import("gsap/ScrollToPlugin"),
    import("gsap/SplitText"),
    import("swiper/bundle"),
    import("imagesloaded"),
    import("isotope-layout"),
    import("jquery-bridget"),
    import("@srexi/purecounterjs"),
  ]);

  const gsapLib = unwrapDefault(gsapModule) as typeof gsap;
  const ScrollTriggerLib = pickNamed<typeof ScrollTrigger>(scrollTriggerModule, "ScrollTrigger");
  const ScrollToPluginLib = pickNamed<typeof ScrollToPlugin>(scrollToModule, "ScrollToPlugin");
  const SplitTextLib = pickNamed<typeof SplitText>(splitTextModule, "SplitText");
  const SwiperCtor = unwrapDefault(swiperModule) as typeof Swiper;
  const imagesLoaded = unwrapDefault(imagesLoadedModule) as {
    (elem: unknown, options?: unknown, callback?: unknown): unknown;
    makeJQueryPlugin?: ($?: JQueryStatic) => void;
  };
  const IsotopeCtor = unwrapDefault(isotopeModule) as typeof Isotope;
  const jQueryBridget = unwrapDefault(bridgetModule) as (
    namespace: string,
    plugin: unknown,
    $?: JQueryStatic,
  ) => void;
  const PureCounter = unwrapDefault(pureCounterModule) as new (options?: unknown) => unknown;

  gsapLib.registerPlugin(ScrollTriggerLib, ScrollToPluginLib, SplitTextLib);
  gsapLib.ticker.lagSmoothing(0);

  window.gsap = gsapLib as never;
  window.ScrollTrigger = ScrollTriggerLib as never;
  window.ScrollToPlugin = ScrollToPluginLib;
  window.SplitText = SplitTextLib;
  window.Swiper = SwiperCtor as never;
  window.imagesLoaded = imagesLoaded as never;
  window.Isotope = IsotopeCtor;
  window.PureCounter = PureCounter;

  imagesLoaded.makeJQueryPlugin?.(jquery);
  jQueryBridget("isotope", IsotopeCtor, jquery);

  await Promise.all([
    import("bootstrap"),
    import("magnific-popup"),
  ]);
}
