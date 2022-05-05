import tipAmount from "./tipAmount";

const bill = 142.55;
const tipPercent = 15;
const numberOfPeople = 5;

test("calculate tipAmount", () => {
  expect(tipAmount({ bill, tipPercent, numberOfPeople })).toBeCloseTo(4.28);
});
