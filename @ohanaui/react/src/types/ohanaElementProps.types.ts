import { OhanaElement } from "./ohanaElement.types";
import { ComponentProps } from "react";

export type OhanaElementProps<OhanaElementType extends OhanaElement> =
  ComponentProps<OhanaElementType>;
