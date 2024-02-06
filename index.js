const canvas = document.querySelector('.canvas');
const slider = document.querySelector('#slider');
const clearButton = document.querySelector('#clear');
const blackPen = document.querySelector('#black');
const rainbowPen = document.querySelector('#rainbow');
const eraserPen = document.querySelector('#eraser');
let blackPenClicked = 1;
let rainbowPenClicked = 0;
let eraserPenClicked = 0;


function drawGrid () {

    document.querySelector('.canvas').innerHTML = '';

    const size = document.querySelector('#slider').value;

    

    document.querySelector('.gridSize').textContent = `${size} x ${size}`;

    for (let i = 0; i < size ; i++) {
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

            if (blackPenClicked === 1) {
            pixel.addEventListener("mouseover", function() {
                pixel.style.background = "black";
            });
            } else if (rainbowPenClicked === 1) {
                pixel.addEventListener("mouseover", function() {
                    pixel.style.background = getRandomRgb();
                });
            } else {
                pixel.addEventListener("mouseover", function() {
                    pixel.style.background = "white";
                });
            }
            
            blackPen.addEventListener("click", function() {
                blackPenClicked = 1;
                rainbowPenClicked = 0;
                eraserPenClicked = 0;
                pixel.addEventListener("mouseover", function() {
                    pixel.style.background = "black";
                });
            });
            rainbowPen.addEventListener("click", function() {
                blackPenClicked = 0;
                rainbowPenClicked = 1;
                eraserPenClicked = 0;
                pixel.addEventListener("mouseover", function() {
                    pixel.style.background = getRandomRgb();
                });
            });
            eraserPen.addEventListener("click", function() {
                blackPenClicked = 0;
                rainbowPenClicked = 0;
                eraserPenClicked = 1;
                pixel.addEventListener("mouseover", function() {
                    pixel.style.background = "white";
                });
            });
            
        }   

        canvas.appendChild(gridRow);
    }
}

function getRandomRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

slider.addEventListener("input", drawGrid);
clearButton.addEventListener("click", drawGrid);
drawGrid();