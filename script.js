const create_grid = document.querySelector(".create-grid");

create_grid.addEventListener("click", function () {
  const numberOfGrids = prompt("Enter the number of grids?");
  if (numberOfGrids > 1000) {
    return alert("Please enter a number less than 1000");
  }
  if (numberOfGrids === null || numberOfGrids === undefined) {
    numberOfGrids = 1000;
  }
  createGrid(numberOfGrids);
});

function createGrid(numberOfGrids) {
  const container = document.querySelector(".container");
  container.textContent = "";

  for (let i = 0; i < numberOfGrids; i++) {
    const div = document.createElement("div");
    div.setAttribute("id", `div${i}`);
    div.classList.add(`child`);
    div.classList.add(`div+${i}`);
    container.appendChild(div);
  }
  const childAll = document.querySelectorAll(".child");
  childAll.forEach((el) => {
    el.addEventListener("mousemove", function (e) {
      const childEle = document.getElementById(e.target.id);
      const style = window.getComputedStyle(childEle);
      const logo = document.querySelector(".logo");

      const rgb = style.getPropertyValue("background-color").match(/\d+/g);
      console.log(rgb);
      console.log(rgb[2]);

      let newRedValue = rgb[0] - Math.floor(Math.random() * 100) + 1;
      let newGreenValue = rgb[1] - Math.floor(Math.random() * 100) + 1;
      let newBlueValue = rgb[2] - 5.5;

      const newRGB = constructRGB(newRedValue, newGreenValue, newBlueValue);
      console.log(newRGB);
      childEle.setAttribute("style", `background-color:${newRGB};`);
      logo.setAttribute("style", `color:${newRGB};`);
    });
  });
}
function constructRGB(red, green, blue) {
  return `rgb(${red},${green},${blue})`;
}
createGrid(1000);
