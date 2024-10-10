import { OhanaElement } from "./ohanaElement.types";
import { OhanaElementProps } from "./ohanaElementProps.types";
import { OhanaWithAsChild } from "./ohanaWithAsChild.types";

export type OhanaElementPropsWithAsChild<
  OhanaElementType extends OhanaElement,
> = OhanaWithAsChild<OhanaElementProps<OhanaElementType>>;
