import totalTipAmount from "./totalTipAmount";

const bill = 142.55;
const tipPercent = 15;
const numberOfPeople = 5;

test("calculate total tip amount", () => {
  expect(totalTipAmount({ bill, tipPercent, numberOfPeople })).toBeCloseTo(
    32.79
  );
});
