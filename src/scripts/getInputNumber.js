export default function getInputNumber(event) {
  let number = Number(event.target.value); //remove leading zero if it start with zero
  let positiveNumber = Math.abs(number);

  return positiveNumber;
}
