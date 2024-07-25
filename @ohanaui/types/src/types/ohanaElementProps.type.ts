import { OhanaElement } from "./ohanaElement.type";
import { ComponentProps } from "react";

export type OhanaElementProps<OhanaElementType extends OhanaElement> =
  ComponentProps<OhanaElementType>;
