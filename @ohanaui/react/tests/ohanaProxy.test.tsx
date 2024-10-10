import { ohanaProxy } from "../src";
import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";

describe("ohanaProxy", () => {
  it("renders a DOM element", () => {
    render(<ohanaProxy.div data-testid="ohana-proxy" />);
    expect(screen.getByTestId("ohana-proxy").nodeName).toBe("DIV");
  });

  it("renders a DOM element with a ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(<ohanaProxy.div ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("renders as its child DOM element when asChild is true", () => {
    render(
      <ohanaProxy.div asChild data-testid="ohana-proxy-as-child">
        <ohanaProxy.span />
      </ohanaProxy.div>,
    );
    expect(screen.getByTestId("ohana-proxy-as-child").nodeName).toBe("SPAN");
  });

  it("rrenders as its child DOM element when asChild is true with its child ref", () => {
    const refAsChild = createRef<HTMLDivElement>();
    render(
      <ohanaProxy.div asChild ref={refAsChild}>
        <ohanaProxy.span />
      </ohanaProxy.div>,
    );
    expect(refAsChild.current).toBeInstanceOf(HTMLSpanElement);
  });
});
