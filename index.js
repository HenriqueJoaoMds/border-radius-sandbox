let gSlider = ebi("Gslider");
let box = ebi("box");
let occ = ebi("output-css-code");
let equalSizesBox = ebi("equal-sizes");
let fourSliders = ebi("4sliders");

let tlSlider = ebi("TLslider");
let trSlider = ebi("TRslider");
let brSlider = ebi("BRslider");
let blSlider = ebi("BLslider");

tlSlider.disabled = true;
trSlider.disabled = true;
brSlider.disabled = true;
blSlider.disabled = true;

equalSizesBox.onclick = (e) => {
  switchAllSliders();
};

gSlider.oninput = (e) => {
  box.style.borderRadius = `${gSlider.value}px`;

  tlSlider.value = gSlider.value;
  trSlider.value = gSlider.value;
  brSlider.value = gSlider.value;
  blSlider.value = gSlider.value;

  updateOutPutCode();
};

fourSliders.addEventListener("mousemove", () => {
  box.style.borderRadius = `${tlSlider.value}px ${trSlider.value}px ${brSlider.value}px ${blSlider.value}px`;

  updateOutPutCode();
});

function ebi(id) {
  return document.getElementById(id);
}

function switchAllSliders() {
  gSlider.disabled = !gSlider.disabled;

  tlSlider.disabled = !tlSlider.disabled;
  trSlider.disabled = !trSlider.disabled;
  brSlider.disabled = !brSlider.disabled;
  blSlider.disabled = !blSlider.disabled;
}

function updateOutPutCode() {
  if (equalSizesBox.checked) {
    occ.innerText = `border-radius: ${gSlider.value}px;`;
  } else {
    occ.innerText = `border-radius: ${tlSlider.value}px ${trSlider.value}px ${brSlider.value}px ${blSlider.value}px`;
  }
}
