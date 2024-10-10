import { OhanaSlot, OhanaSlotProps } from "../../components";
import { OhanaElement, OhanaElementPropsWithAsChild } from "../../types";
import { createElement, forwardRef } from "react";

export type OhanaProxyTargetProps<OhanaElementType extends OhanaElement> = {
  element: OhanaElementType;
};

export const ohanaProxyTarget = <OhanaElementType extends OhanaElement>({
  element,
}: OhanaProxyTargetProps<OhanaElementType>) =>
  forwardRef<HTMLElement, OhanaElementPropsWithAsChild<OhanaElementType>>(
    ({ asChild, children, ...props }, ref) =>
      asChild ? (
        <OhanaSlot {...(props as OhanaSlotProps)} ref={ref}>
          {children}
        </OhanaSlot>
      ) : (
        createElement(element, { ref, ...props }, children)
      ),
  );
