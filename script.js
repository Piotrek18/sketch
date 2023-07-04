let grid = document.querySelector("#grid");
let sizeBtn = document.querySelector("#sizeBtn");
let clearBtn = document.querySelector("#clearBtn");

function createGrid(size) {

    while (grid.firstChild){
        grid.removeChild(grid.firstChild);
    }

    for (let i=0; i<size; i++){
        for (let j=0; j<size; j++){
            let div = document.createElement("div");
            div.className = "grid-Cell";
            div.addEventListener("mouseenter", colorChange)
            grid.appendChild(div);
        }
    }

    grid.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
    grid.style.gridTemplateRows = "repeat(" + size + ", 1fr)";
} 

function colorChange(e){
    e.target.classList.add("hovered");
}

function changeGridSize() {
    let newSize = parseInt(prompt("Please type grid size (between 2 and 64): "));

    if (newSize >= 2 && newSize <=64) {
        createGrid(newSize);
    }else{
        alert ("Wrong grid size!");
    }
}

function clearGrid(){
    let cells = document.querySelectorAll(".grid-Cell");
    cells.forEach(function (cell) {
      cell.classList.remove("hovered");
    }
}

sizeBtn.addEventListener("click", changeGridSize);
clearBtn.addEventListener("click", clearGrid)

createGrid(16);