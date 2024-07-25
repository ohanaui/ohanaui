import { ohanaMerge } from "@ohanaui/merge";
import {
  cloneElement,
  forwardRef,
  HTMLAttributes,
  isValidElement,
} from "react";

export type OhanaSlotProps = HTMLAttributes<HTMLElement>;

export const OhanaSlot = forwardRef<HTMLElement, OhanaSlotProps>(
  ({ children, ...props }, ref) => {
    if (isValidElement(children)) {
      return cloneElement(children, {
        ...ohanaMerge({
          object1: props,
          object2: children["props"],
        }),
        // @ts-expect-error ref typing!
        ref,
      });
    }

    return null;
  },
);
