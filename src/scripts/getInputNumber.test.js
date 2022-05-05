import getInputNumber from "./getInputNumber";

const event = {
  target: {
    value: "-00500",
  },
};

it("get number from event, remove minus, remove leading zeros", () => {
  expect(getInputNumber(event)).toBe(500);
});
