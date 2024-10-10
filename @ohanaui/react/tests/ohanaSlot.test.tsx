import { OhanaSlot } from "../src";
import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";

describe("OhanaSlot", () => {
  it("renders as its child DOM element", () => {
    render(
      <OhanaSlot data-testid="ohana">
        <div />
      </OhanaSlot>,
    );
    expect(screen.getByTestId("ohana").nodeName).toBe("DIV");
  });

  it("renders as its child DOM element with a ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <OhanaSlot ref={ref}>
        <div />
      </OhanaSlot>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("renders as its child DOM element with its child ref", () => {
    const refChild = createRef<HTMLDivElement>();
    render(
      <OhanaSlot>
        <div ref={refChild} />
      </OhanaSlot>,
    );
    expect(refChild.current).toBeInstanceOf(HTMLDivElement);
  });
});
