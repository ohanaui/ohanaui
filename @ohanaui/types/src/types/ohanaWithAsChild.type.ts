import { OhanaAsChild } from "./ohanaAsChild.type";

export type OhanaWithAsChild<T> = T & { asChild?: OhanaAsChild };
