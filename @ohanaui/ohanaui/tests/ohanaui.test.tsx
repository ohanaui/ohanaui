import { expect, render, screen, test } from "@tools/vitest";

const sum = (a, b) => a + b;

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("react", () => {
  render(<div data-testid="p" />);
  expect(screen.getByTestId("p").nodeName).toBe("DIV");
});
