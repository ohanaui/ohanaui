import { OhanaMerge } from "./types";

export type OhanaMergeProps<
  Object1Type extends object,
  Object2Type extends object,
> = {
  object1: Object1Type;
  object2: Object2Type;
};

export const ohanaMerge = <
  Object1Type extends object,
  Object2Type extends object,
>({
  object1,
  object2,
}): OhanaMerge<Object1Type, Object2Type> =>
  [object1, object2].reduce((merge, object) => {
    Object.entries(object).forEach(([key, value]) => {
      const mergeKeyValue = merge[key];

      if (mergeKeyValue) {
        if (["class", "className"].includes(key))
          return (merge[key] = `${mergeKeyValue} ${value}`);

        if (["style"].includes(key)) {
          const mergeKeyValueType = typeof mergeKeyValue;
          const valueType = typeof value;

          if (mergeKeyValueType === "object" && valueType === "object")
            return (merge[key] = ohanaMerge({
              object1: mergeKeyValue,
              object2: value,
            }));
        }
      }

      return (merge[key] = value);
    });

    return merge;
  });
