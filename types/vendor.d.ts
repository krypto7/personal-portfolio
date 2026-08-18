declare module "jquery-bridget" {
  function jQueryBridget(
    namespace: string,
    PluginClass: unknown,
    $?: JQueryStatic,
  ): void;
  export default jQueryBridget;
}

declare module "@srexi/purecounterjs" {
  const PureCounter: new (options?: unknown) => unknown;
  export default PureCounter;
}

declare module "magnific-popup";
declare module "jquery-nice-select";
