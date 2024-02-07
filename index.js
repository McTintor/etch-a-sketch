const canvas = document.querySelector('.canvas');
const slider = document.querySelector('#slider');
const clearButton = document.querySelector('#clear');
const blackPen = document.querySelector('#black');
const rainbowPen = document.querySelector('#rainbow');
const eraserPen = document.querySelector('#eraser');
const gridSizeDisplay = document.querySelector('.gridSize');
let penColor = "black";

function drawGrid () {
    canvas.innerHTML = '';
    const size = slider.value;
    gridSizeDisplay.textContent = `${size} x ${size}`;

    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');
        let gridRowSize = 100.0 / size;
        gridRow.style.height = `${gridRowSize}%`;

        for (let j = 0; j < size; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add('range');
            let pixelSize = 100.0 / size;
            pixel.style.width = `${pixelSize}%`;
            gridRow.appendChild(pixel);
        }
        canvas.appendChild(gridRow);
    }
}

function applyPenColor(pixel) {
    pixel.style.background = penColor;
}

function getRandomRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

blackPen.addEventListener("click", function() {
    penColor = "black";
});

rainbowPen.addEventListener("click", function() {
    penColor = "rainbow";
});

eraserPen.addEventListener("click", function() {
    penColor = "white";
});

canvas.addEventListener("mouseover", function(event) {
    if (event.target.classList.contains('range')) {
        const pixel = event.target;
        if (penColor === "rainbow") {
            pixel.style.background = getRandomRgb();
        } else {
            applyPenColor(pixel);
        }
    }
});

slider.addEventListener("input", drawGrid);
clearButton.addEventListener("click", drawGrid);
drawGrid();
