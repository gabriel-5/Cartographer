let gridContainer = document.querySelector("#grid-container");

for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        gridContainer.appendChild(cell);
    }
}

const cells = document.querySelectorAll(".cell");


cells.forEach(c => {
    c.addEventListener("mouseover", () => {
        c.classList.toggle("hover");
    })
    c.addEventListener("mouseout", () => {
        c.classList.toggle("hover");
    })
})


