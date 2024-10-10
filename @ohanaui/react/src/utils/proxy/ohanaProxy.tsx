import { OhanaElement, OhanaProxy } from "../../types";
import { ohanaCache } from "./ohanaCache";
import { ohanaProxyTarget } from "./ohanaProxyTarget";

export const ohanaProxy = new Proxy(ohanaProxyTarget, {
  get: (ohanaProxyTarget, element: OhanaElement) => {
    if (!ohanaCache.has(element))
      ohanaCache.set(element, ohanaProxyTarget({ element }));
    return ohanaCache.get(element);
  },
}) as unknown as OhanaProxy;
