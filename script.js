let grid = document.querySelector("#grid");
let sizeBtn = document.querySelector("#sizeBtn");
let clearBtn = document.querySelector("#clearBtn");
let rgbBtn = document.querySelector("#rgbBtn");
let isRgbMode = false;

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

function getRandomColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

function colorChange(e){
    if(isRgbMode) {
        e.target.style.backgroundColor = getRandomColor();
    }else {
        e.target.classList.add("hovered"); 
    }
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
        cell.style.backgroundColor = "white";
        cell.classList.remove("hovered");
    });
}

function toggleRgbMode(){
    isRgbMode = !isRgbMode;
    rgbBtn.textContent = isRgbMode ? "Default" : "RGB";
}

sizeBtn.addEventListener("click", changeGridSize);
clearBtn.addEventListener("click", clearGrid);
rgbBtn.addEventListener("click", toggleRgbMode);

createGrid(16);