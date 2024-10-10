import { ReactElement } from "react";

export type OhanaGetSlotRefProps = {
  element: ReactElement;
  ref: React.ForwardedRef<HTMLElement>;
};

export const ohanaGetSlotRef = ({ element, ref }: OhanaGetSlotRefProps) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  element?.props?.ref || (element as any)?.ref || ref;
