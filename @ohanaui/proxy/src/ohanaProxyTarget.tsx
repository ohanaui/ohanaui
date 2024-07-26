import { OhanaSlot } from "@ohanaui/slot";
import { OhanaElement, OhanaProps } from "@ohanaui/types";
import { createElement, forwardRef } from "react";

export type OhanaProxyTargetProps<OhanaElementType extends OhanaElement> = {
  element: OhanaElementType;
};

export const ohanaProxyTarget = <OhanaElementType extends OhanaElement>({
  element,
}: OhanaProxyTargetProps<OhanaElementType>) =>
  forwardRef<HTMLElement, OhanaProps<OhanaElementType>>(
    ({ asChild, children, ...props }, ref) =>
      asChild ? (
        <OhanaSlot {...props}>{children}</OhanaSlot>
      ) : (
        createElement(element, { ref, ...props }, children)
      ),
  );
