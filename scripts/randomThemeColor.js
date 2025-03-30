document
  .getElementById("randomThemeGenerator")
  .addEventListener("click", function () {
    // Random Color Generate Start

    const randomNumber = Math.random();

    const decimalEquivalentOfHexaDecimal = 16777215;
    const colorValueRgb = randomNumber * decimalEquivalentOfHexaDecimal;

    const floorColorValueRgb = Math.floor(colorValueRgb);

    const hexaColorCode = floorColorValueRgb.toString(16);

    const randomColor = `#${hexaColorCode}`;

    // Random Color Generate Closed Above

    // Random Background Color Style Start

    document.body.style.backgroundColor = randomColor;
    // document.body.style.color = randomColor;

    // Random Background Color Style Start Closed Above
  });
