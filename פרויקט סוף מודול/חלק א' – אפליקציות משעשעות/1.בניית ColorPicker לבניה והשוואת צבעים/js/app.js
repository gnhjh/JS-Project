import Color from "./colors.js";
// get elements from the dom:
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const box = document.querySelector(".box");
const savedColors = document.querySelector(".saved-colors");

//helper array of all rgb inputs:
const inputs = [red, green, blue];
//store all the colors:
let colors = [];
function loadColorsFromDisk() {
  const savedColors = localStorage.getItem("colors");
  if (!savedColors) return;
  let colorsFromDisk = JSON.parse(localStorage.getItem("colors"));
  colorsFromDisk = colorsFromDisk.map((c) => new Color(c.r, c.g, c.b));
  colors = colorsFromDisk;
  renderColors();
}
//helper func to fetch the current color:
const currentColor = () => {
  const r = Number(red.value);
  const g = Number(green.value);
  const b = Number(blue.value);
  return new Color(r, g, b);
};
const renderColors = () => {
  savedColors.innerHTML = "";
  colors.forEach((color) => {
    savedColors.innerHTML += `
    <ul class="sdved-colors" style="background: ${color.rgb};color: white;">
      <li>${color}</li>
    </ul>
    `;
  });
};

//    .addEventListener("click",()=> {console.log("click")})
//      forEach(()=>{})

inputs.forEach((input) =>
  input.addEventListener("input", (e) => {
    const color = currentColor();
    box.style.background = color.rgb;
    box.innerText = `${color.rgb} ${color.hex}`;
    box.style.color = "white";
  })
);
box.addEventListener("click", () => {
  if (box.innerText) {
    const color = currentColor();
    colors.push(color);
    localStorage.setItem("colors", JSON.stringify(colors));
    // let colorsFromDisk = JSON.parse(
    //   localStorage.getItem('colors') ?? ''
    // ) as Color[]
    // colorsFromDisk = colorsFromDisk.map((c) => new Color(c.r, c.g, c.b))
    // renderColors()
    loadColorsFromDisk();
  }
});
loadColorsFromDisk();
