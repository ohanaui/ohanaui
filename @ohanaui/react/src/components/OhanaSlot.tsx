import { ohanaGetSlotRef } from "../utils";
import { ohanaMerge } from "@ohanaui/merge";
import {
  cloneElement,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  ReactElement,
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
        // @ts-expect-error ref
        ref: ohanaGetSlotRef({ element: children as ReactElement, ref }),
      });
    }

    return children;
  },
);
