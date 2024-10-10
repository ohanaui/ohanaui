export type OhanaMerge<
  Object1Type extends object,
  Object2Type extends object,
> = {
  [K in keyof Object1Type | keyof Object2Type]: K extends keyof Object2Type
    ? Object2Type[K]
    : K extends keyof Object1Type
      ? Object1Type[K]
      : never;
};
