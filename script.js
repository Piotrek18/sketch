let grid = document.querySelector("#grid");

function createGrid(size) {

    for (let i=0; i<size; i++){
        for (let j=0; j<size; j++){
            let div = document.createElement("div");
            div.className = "grid-Cell";
            grid.appendChild(div);
        }
    }

    grid.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
    grid.style.gridTemplateRows = "repeat(" + size + ", 1fr)";
}

function changeGridSize() {
    let newSize = parseInt(prompt("Please type grid size (between 2 and 64): "));

    if (newSize >= 2 && newSize <=64) {
        createGrid(newSize);
    }else{
        alert ("Wrong grid size!");
    }
}

createGrid(16);