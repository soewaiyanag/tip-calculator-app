export default function removeActiveClass(parentRef) {
  const children = Array.from(parentRef.current.children);
  children.forEach((child) => {
    if (child.classList.contains("active")) {
      child.classList.remove("active");
      return;
    }
  });
}
