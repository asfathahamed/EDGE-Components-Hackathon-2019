import { getRange } from "../getRange";

describe("getRange", () => {
  it("should return new array with min and max value", () => {
    const expected = getRange(1, 5);
    const result = [1, 2, 3, 4, 5];
    expect(expected).toEqual(result);
  });
});
