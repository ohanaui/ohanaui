import { OhanaElement } from "./ohanaElement.type";
import { OhanaElementProps } from "./ohanaElementProps.type";
import { OhanaWithAsChild } from "./ohanaWithAsChild.type";

export type OhanaPropsWithAsChild<OhanaElementType extends OhanaElement> =
  OhanaWithAsChild<OhanaElementProps<OhanaElementType>>;
