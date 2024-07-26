import type { OhanaElement, OhanaProps } from "@ohanaui/types";
import { ReactNode } from "react";

export type OhanaProxy = {
  [OhanaElementType in OhanaElement]: (
    props: OhanaProps<OhanaElementType>,
  ) => ReactNode;
};
