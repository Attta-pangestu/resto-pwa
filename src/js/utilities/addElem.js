export const addElem = (element, parent, classes) => {
  const child = document.createElement(element);
  if (typeof classes !== "undefined") {
    classList.forEach((cl) => {
      child.classList.add(cl);
    });
  }
};
