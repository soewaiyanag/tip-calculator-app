export default function onlyInt(event) {
  const key = event.key;
  if (key === "e" || key === "-" || key === "+") {
    event.preventDefault();
  }
}
