import { curry, sum } from "./index";

const getSum = (
  a: number,
  b: number,
  c: number,
  d: number,
  e: number
): number => a + b + c + d + e;

const hof = curry(getSum);
describe("curry", () => {
  it("hof(1, 2, 3, 4, 5) to be 15", () => {
    expect(hof(1, 2, 3, 4, 5)).toBe(15);
  });
  it("hof(2, 3, -4)(5, 6) to be 12", () => {
    expect(hof(2, 3, -4)(5, 6)).toBe(12);
  });
  it("hof(3, 4)(5, 6)(7) to be 25", () => {
    expect(hof(3, 4)(5, 6)(7)).toBe(25);
  });
  it("hof(4, 5)(6)(7, -8) to be 14", () => {
    expect(hof(4, 5)(6)(7, -8)).toBe(14);
  });
  it("hof(5)(6)(7)(8)(9) to be 35", () => {
    expect(hof(5)(6)(7)(8)(9)).toBe(35);
  });
  it("hof(0)(0,0,0)(0,0) to be 0", () => {
    expect(hof(0)(0, 0, 0)(0, 0)).toBe(0);
  });
});

describe("sum", () => {
  it("sum(1)(2) to be 15", () => {
    expect(sum(1)(2).toString()).toBe(3);
  });
  it("sum(5)(-1)(2) to be 6", () => {
    expect(sum(5)(-1)(2).toString()).toBe(6);
  });
  it("sum(6)(-1)(-2)(-3) to be 0", () => {
    expect(sum(6)(-1)(-2)(-3).toString()).toBe(0);
  });
  it("sum(0)(1)(2)(3)(4)(5) to be 15", () => {
    expect(sum(0)(1)(2)(3)(4)(5).toString()).toBe(15);
  });
  it("sum(5)(6)(7)(8)(9) to be 35", () => {
    expect(sum(5)(6)(7)(8)(9).toString()).toBe(35);
  });
  it("sum(0)(0,0,0)(0,0) to be 0", () => {
    expect(sum(0)(0)(0).toString()).toBe(0);
  });
});

