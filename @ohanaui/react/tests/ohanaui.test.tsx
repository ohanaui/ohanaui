import { ohana } from "../src";
import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";

describe("ohana", () => {
  it("renders a DOM element", () => {
    render(<ohana.div data-testid="ohana" />);
    expect(screen.getByTestId("ohana").nodeName).toBe("DIV");
  });

  it("renders a DOM element with a ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(<ohana.div ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("renders as its child DOM element when asChild is true", () => {
    render(
      <ohana.div asChild data-testid="ohana-as-child">
        <ohana.span />
      </ohana.div>,
    );
    expect(screen.getByTestId("ohana-as-child").nodeName).toBe("SPAN");
  });

  it("rrenders as its child DOM element when asChild is true with its child ref", () => {
    const refAsChild = createRef<HTMLDivElement>();
    render(
      <ohana.div asChild ref={refAsChild}>
        <ohana.span />
      </ohana.div>,
    );
    expect(refAsChild.current).toBeInstanceOf(HTMLSpanElement);
  });
});
