import { OhanaAsChild } from "./ohanaAsChild.types";

export type OhanaWithAsChild<T> = T & { asChild?: OhanaAsChild };
