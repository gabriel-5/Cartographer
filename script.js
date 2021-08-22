let gridContainer = document.querySelector("#grid-container");

let cellAmount = 16;

let cellSize = 320 / cellAmount;

for (i = 0; i < cellAmount; i++) {
    for (let j = 0; j < cellAmount; j++) {

        let cell = document.createElement("div");
        cell.classList.add("cell");
        gridContainer.appendChild(cell);
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
    }

}

const cells = document.querySelectorAll(".cell");

const resetButton = document.getElementById("reset-button")

resetButton.addEventListener("click", () => {
    cells.forEach(c => {
        c.classList.remove("hover");
    })
})

cells.forEach(c => {
    c.addEventListener("mouseover", () => {
        c.classList.add("hover");
    }
    )
})





