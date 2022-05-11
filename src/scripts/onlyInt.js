export default function onlyInt(event) {
  const key = event.key;
  const isBackspace = key === "Backspace";
  const isNaN = Number.isNaN(parseInt(key));
  if (isNaN && !isBackspace) {
    event.preventDefault();
  }
}
