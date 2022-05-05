export default function tipAmount({ bill, tipPercent, numberOfPeople }) {
  let _bill = Number(bill);
  let _tipPercent = Number(tipPercent);
  let _numberOfPeople = Number(numberOfPeople);

  let value = (_bill * (_tipPercent / 100)) / _numberOfPeople;
  value = isNaN(value) || !isFinite(value) ? 0 : value;
  value = value.toFixed(2);
  value = value === "0.00" ? "0" : value;
  return parseFloat(value);
}
