export const addElem = (element, parent = null, classes, content = null) => {
  const child = document.createElement(element);
  if (typeof classes !== "undefined") {
    classes.forEach((cl) => {
      child.classList.add(cl);
    });
  }
  if (content !== null) {
    child.innerHTML = content;
  }
  if (parent !== null) {
    parent.appendChild(child);
  }
  return child;
};
