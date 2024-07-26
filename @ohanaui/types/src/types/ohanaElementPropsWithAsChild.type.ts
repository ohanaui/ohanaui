import { OhanaElement } from "./ohanaElement.type";
import { OhanaElementProps } from "./ohanaElementProps.type";
import { OhanaWithAsChild } from "./ohanaWithAsChild.type";

export type OhanaElementPropsWithAsChild<
  OhanaElementType extends OhanaElement,
> = OhanaWithAsChild<OhanaElementProps<OhanaElementType>>;
