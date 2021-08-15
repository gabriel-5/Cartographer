let gridContainer = document.querySelector("#grid-container");

for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++){
    let cell = document.createElement("div");
    cell.classList.add("cell");
    gridContainer.appendChild(cell);
}
}

let cellSelect = document.querySelector(".cell");


cellSelect.addEventListener("mouseover", () => {
    cellSelect.classList.toggle("hover");
    

})

cellSelect.addEventListener("mouseout", () => {
    cellSelect.classList.toggle("hover");

})
