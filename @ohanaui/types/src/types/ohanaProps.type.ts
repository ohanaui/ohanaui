import { OhanaElement } from "./ohanaElement.type";
import { OhanaPropsWithAsChild } from "./ohanaPropsWithAsChild.type";

export type OhanaProps<OhanaElementType extends OhanaElement> =
  OhanaPropsWithAsChild<OhanaElementType>;
