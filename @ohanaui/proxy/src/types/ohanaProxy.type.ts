import type {
  OhanaElement,
  OhanaElementPropsWithAsChild,
} from "@ohanaui/types";
import { ReactNode } from "react";

export type OhanaProxy = {
  [OhanaElementType in OhanaElement]: (
    props: OhanaElementPropsWithAsChild<OhanaElementType>,
  ) => ReactNode;
};
