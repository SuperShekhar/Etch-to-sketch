const container = document.querySelector(".container");
let size = 20;

function createGrid(size) {
    container.innerHTML = ""; // Clear previous grid
    const squareSize = 600 / size; // Calculate the size of each square
    for (let i = 1; i <= size * size; i++) {
        let squares = document.createElement("div");
        squares.classList.add("squares");
        squares.style.width = squareSize + "px"; // Set width of square
        squares.style.height = squareSize + "px"; // Set height of square
        container.appendChild(squares);
    }
    const divs = document.querySelectorAll(".squares");
    divs.forEach((div) => {
        div.addEventListener("mouseover", function(e) {
            if (!e.target.classList.contains("permanent-hover")) {
                e.target.classList.add("permanent-hover");
            }
        });
    });
}

createGrid(size); // Initial grid creation

const reset = document.querySelector(".reset");
reset.addEventListener("click", newGrid);

function newGrid() {
    size = parseInt(prompt("Enter the size of grid"));
    if (size >= 50) {
        alert("Choose a grid size less than 50.");
        newGrid(); // Recursively call newGrid to prompt user again
    } else {
        createGrid(size); // Create new grid with updated size
    }
}
