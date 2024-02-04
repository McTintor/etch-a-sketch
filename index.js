const canvas = document.querySelector('.canvas');
let slider = document.querySelector('#slider');


function drawGrid () {

    document.querySelector('.canvas').innerHTML = '';

    const size = document.querySelector('#slider').value;
    document.querySelector('.gridSize').textContent = document.querySelector('#slider').value;

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
        }   

        canvas.appendChild(gridRow);
    }
}

slider.addEventListener("input", drawGrid);