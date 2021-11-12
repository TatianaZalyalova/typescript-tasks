import { curry, sum, spiral, semverSort } from "./index";

const getSum = (a: number, b: number, c: number, d: number, e: number): any =>
  a + b + c + d + e;

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

describe("spiral", () => {
  it("spiral to be 15", () => {
    expect(
      spiral([
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
      ])
    ).toStrictEqual([
      0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11,
    ]);
  });
  it("spiral to be [10, 1, 6, 5]", () => {
    expect(
      spiral([
        [10, 1],
        [5, 6],
      ])
    ).toStrictEqual([10, 1, 6, 5]);
  });
  it("spiral to be 15", () => {
    expect(spiral([[55]])).toStrictEqual([55]);
  });
});

describe("semverSort", () => {
  it('semverSort(["1.0.5", "2.5.0", "0.12.0", "1", "1.23.45", "1.4.50", "1.2.3.4.5.6.7"]) to be  [ "0.12.0", "1", "1.0.5", "1.2.3.4.5.6.7", "1.4.50", "1.23.45", "2.5.0" ]', () => {
    expect(
      semverSort([
        "1.0.5",
        "2.5.0",
        "0.12.0",
        "1",
        "1.23.45",
        "1.4.50",
        "1.2.3.4.5.6.7",
      ])
    ).toStrictEqual([
      "0.12.0",
      "1",
      "1.0.5",
      "1.2.3.4.5.6.7",
      "1.4.50",
      "1.23.45",
      "2.5.0",
    ]);
  });
  it('semverSort(["2.4.8", "0.5.0", "5.12.3", "10.3.5"]) to be ["0.5.0", "2.4.8", "5.12.3", "10.3.5"]', () => {
    expect(semverSort(["2.4.8", "0.5.0", "5.12.3", "10.3.5"])).toStrictEqual([
      "0.5.0",
      "2.4.8",
      "5.12.3",
      "10.3.5",
    ]);
  });
  it('semverSort(["15", "2.0.0", "0.0.2", "0.0.0", "1.0.15.0.2"]) to be  [ "0.0.0", "0.0.2", "1.0.15.0.2", "2.0.0", "15" ]', () => {
    expect(
      semverSort(["15", "2.0.0", "0.0.2", "0.0.0", "1.0.15.0.2"])
    ).toStrictEqual(["0.0.0", "0.0.2", "1.0.15.0.2", "2.0.0", "15"]);
  });
});
