import { OhanaElement } from "./ohanaElement.types";
import { OhanaElementPropsWithAsChild } from "./ohanaElementPropsWithAsChild.types";
import { ReactNode } from "react";

export type OhanaProxy = {
  [OhanaElementType in OhanaElement]: (
    props: OhanaElementPropsWithAsChild<OhanaElementType>,
  ) => ReactNode;
};
