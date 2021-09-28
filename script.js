const container = document.querySelector('#grid-container');

const blackButton = document.querySelector("#black");
blackButton.addEventListener('click', () =>{
    gridDimension = prompt ();
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    drawGrid(gridDimension);
    fillSquareBlack();
});

function fillSquareBlack(){
    const gridSquare = document.querySelectorAll('[class^="grid-square-"]');
    gridSquare.forEach((div) => {
        div.addEventListener("mouseenter",(e) => {
            e.target.style.background = "black";
        });
    });
}

function drawGrid(gridDimension) {
    for (let i = 0; i < gridDimension; i++){
        const gridColumn = document.createElement('div');
        gridColumn.classList.add('grid-column-' + i);
        container.appendChild(gridColumn);
        gridColumn.setAttribute('style', 'display:flex; flex-direction: column; height: 100%; width: 100%;');
        for (let j= 0; j < gridDimension; j++){
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square-'+j);
            gridColumn.appendChild(gridSquare);
            gridSquare.setAttribute('style', "height: 100%; width 100%; border-collapse: collapse; border: 1px solid black;")
        }
    }
    const gridSquare = document.querySelectorAll('[class^="grid-square-"]');
    fillSquareBlack(gridSquare);
    return gridSquare;
}

drawGrid(16);

function fillSquareRandomColor(){
    const gridSquare = document.querySelectorAll('[class^="grid-square-"]');
    gridSquare.forEach((div) => {
        div.addEventListener("mouseenter",(e) => {
            e.target.style.background = pickRandomColor();
        });
    });
}

const randomColorButton = document.querySelector("#random-color");
randomColorButton.addEventListener('click', () =>{
    gridDimension = prompt ();
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    drawGrid(gridDimension);
    fillSquareRandomColor();
});




function pickRandomColor() {
    return 'rgba(' + randomRGBValue() + ',' + randomRGBValue() + ',' + randomRGBValue() + ',' + Math.random() + ')';
    function randomRGBValue(){
        return Math.floor(Math.random() * 255);
    }
}