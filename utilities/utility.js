// font size conversion: px to rem
function pxToRemCalc(px) {
  const rem = px / 16;

  return rem;
}

// set fontSize to elements
function setRemByClassName(className, rem) {
  const elements = document.getElementsByClassName(className);
  for (const element of elements) {
    element.style.setProperty("font-size", rem + "rem", "important");
  }
}
