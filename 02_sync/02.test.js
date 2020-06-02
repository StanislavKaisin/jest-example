const Lodash = require("./02");

let _ = new Lodash();

describe("Lodash the best", () => {
  // let _ = new Lodash();
  let array;
  // array = [false, 42, 0, "", true, null, undefined, "hello"];

  beforeEach(() => {
    array = [false, 42, 0, "", true, null, undefined, "hello"];
  });

  afterAll(() => {
    _ = new Lodash();
  });

  test("should editable testing array", () => {
    array.push(...["one", "two"]);
    expect(array).toContain("one");
    expect(array).toContain("two");
  });

  test("should be defined", () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  test("should remove falsy values from array", () => {
    const result = [42, true, "hello"];
    // expect(_.compact(array)).toBe(result);
    expect(_.compact(array)).toStrictEqual(result);
  });

  test("should not contain fasy vaues", () => {
    const result = [42, true, "hello"];
    expect(_.compact(array)).not.toContain(false);
    expect(_.compact(array)).not.toContain("");
    expect(_.compact(array)).not.toContain(null);
    expect(_.compact(array)).not.toContain(undefined);
    expect(_.compact(array)).not.toContain(0);
  });
});

describe("lodash group by", () => {
  // let _ = new Lodash();
  test("should bedefined", () => {
    expect(_.groupBy).toBeDefined();
    expect(_.groupBy).not.toBeUndefined();
  });

  test("should group array items by Math.floor", () => {
    const array = [2.2, 2.4, 4.2, 3.1];
    const result = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1],
    };
    expect(_.groupBy(array, Math.floor)).toEqual(result);
  });
  test("should group array items by length", () => {
    const array = ["one", "two", "three"];
    const result = {
      3: ["one", "two"],
      5: ["three"],
    };
    expect(_.groupBy(array, "length")).toEqual(result);
  });
  test("should not return array", () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
  });
});
