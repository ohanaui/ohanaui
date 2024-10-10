import { ohanaMerge } from "../src";
import { describe, expect, it } from "vitest";

describe("ohanaMerge", () => {
  it("deep merges two objects", () => {
    expect(
      ohanaMerge({
        object1: { a: 1, b: 2 },
        object2: { c: 3, d: 4 },
      }),
    ).toStrictEqual({ a: 1, b: 2, c: 3, d: 4 });
  });

  it("deep merges two objects containing shared keys", () => {
    expect(
      ohanaMerge({
        object1: { a: 1, b: 2 },
        object2: { a: 3, b: 4 },
      }),
    ).toStrictEqual({ a: 3, b: 4 });
  });

  it("deep merges two objects containing shared and unique keys", () => {
    expect(
      ohanaMerge({
        object1: { a: 1, b: 2, c: 3 },
        object2: { a: 3, b: 4, d: 4 },
      }),
    ).toStrictEqual({ a: 3, b: 4, c: 3, d: 4 });
  });

  it("deep merges two objects while concatenating classes", () => {
    expect(
      ohanaMerge({
        object1: { a: 1, b: 2, class: "a" },
        object2: { a: 3, b: 4, class: "b" },
      }),
    ).toStrictEqual({ a: 3, b: 4, class: "a b" });
  });

  it("deep merges two objects while concatenating classNames", () => {
    expect(
      ohanaMerge({
        object1: { a: 1, b: 2, class: "a" },
        object2: { a: 3, b: 4, class: "b" },
      }),
    ).toStrictEqual({ a: 3, b: 4, class: "a b" });
  });

  it("deep merges two objects while concatenating classNames", () => {
    expect(
      ohanaMerge({
        object1: { a: 1, b: 2, class: "a" },
        object2: { a: 3, b: 4, class: "b" },
      }),
    ).toStrictEqual({ a: 3, b: 4, class: "a b" });
  });

  it("deep merges two objects while deeply merging styles", () => {
    expect(
      ohanaMerge({
        object1: { a: 1, b: 2, style: { background: "black" } },
        object2: { a: 3, b: 4, style: { background: "blue", color: "black" } },
      }),
    ).toStrictEqual({
      a: 3,
      b: 4,
      style: { background: "blue", color: "black" },
    });
  });
});
