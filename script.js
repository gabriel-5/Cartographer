let gridContainer = document.querySelector("#grid-container");

for (i = 0; i < 256; i++) {

    let cell = document.createElement("div");
    cell.classList.add("cell");
    gridContainer.appendChild(cell);

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






// c.addEventListener("mouseout", () => {
    //     c.classList.toggle("hover");
    // })
