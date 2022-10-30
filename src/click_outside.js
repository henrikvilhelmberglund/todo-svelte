export function clickOutside(node) {
  // setup work goes here...
  const handleClick = (event) => {
    if (!node.contains(event.target)) {
      node.dispatchEvent(new CustomEvent("outclick"));
    }
  };
  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      // ...cleanup goes here
      document.removeEventListener("click", handleClick, true);
    }
  };
}
