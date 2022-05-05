import intToString from "./intToString";

it("convert 1000 to 1k", () => {
  expect(intToString(1000)).toBe("1K");
  expect(intToString(50000)).toBe("50K");
  expect(intToString(5000000)).toBe("5M");
});
