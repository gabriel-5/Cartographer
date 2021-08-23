let gridContainer = document.querySelector("#grid-container");
let resetButton = document.querySelector("#reset-button")
let brickButton = document.querySelector("#brick-button")
let fireButton = document.querySelector("#fire-button")
let iceButton = document.querySelector("#ice-button")
let material = "brick"

let cellAmount = 16;
let cellSize = 320 / cellAmount;



function gameSetup(n) {

    for (i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let cell = document.createElement("div"); //create cells in the DOM
            cell.classList.add("cell");               //applies class "cell" to the cells
            gridContainer.appendChild(cell);          //appends them as a child to the gridContainer div
            cell.style.width = `${cellSize}px`;       //sets height and width depending on initial cellAmount variable
            cell.style.height = `${cellSize}px`;      // this is calculated by taking the width of the gridContainer and dividing
        }                                             // it by the value of cellAmount 
    }

    let cells = document.querySelectorAll(".cell");
    cells.forEach(c => {
        c.addEventListener("mouseover", () => {
            c.classList.add(material);
        }
        )
    })
}

gameSetup(cellAmount);

resetButton.addEventListener("click", () => {
    let cells = document.querySelectorAll(".cell");
    cells.forEach(c => {
        c.remove();
    })
    cellAmount = prompt("How many columns/rows?");
    cellSize = 320 / cellAmount;
    gameSetup(cellAmount);
})

iceButton.addEventListener("click", () => {
    material = "ice";
})


brickButton.addEventListener("click", () => {
    material = "brick";
})



fireButton.addEventListener("click", () => {
    material = "fire";
})