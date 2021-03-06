fillSquareBlack(drawGrid(16)); //Draw initial grid

function drawGrid(gridDimension) {
    const container = document.querySelector('#grid-container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < gridDimension; i++){ //Creates grid columns
        const gridColumn = document.createElement('div');
        gridColumn.classList.add('grid-column-' + i);
        container.appendChild(gridColumn);
        gridColumn.setAttribute('style', 'display:flex; flex-direction: column; height: 100%; width: 100%;');
        for (let j= 0; j < gridDimension; j++){ //Fills grid columns with squares
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square-'+j);
            gridColumn.appendChild(gridSquare);
            gridSquare.setAttribute('style', "height: 100%; width 100%; border-collapse: collapse; border: 1px solid black;")
        }
    }
    const gridSquare = document.querySelectorAll('[class^="grid-square-"]');  
    return gridSquare;
}

function gridPrompt() {
    let gridDimension;
    do{
        gridDimension = prompt ("Enter a number from 1-100");
    }while(gridDimension < 0 && gridDimension>=100);
    drawGrid(gridDimension);
}

const blackButton = document.querySelector("#black");
blackButton.addEventListener('click', () =>{
    gridPrompt();
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

const randomColorButton = document.querySelector("#random-color");
randomColorButton.addEventListener('click', () =>{
    gridPrompt();
    fillSquareRandomColor();
});

function fillSquareRandomColor(){
    const gridSquare = document.querySelectorAll('[class^="grid-square-"]');
    gridSquare.forEach((div) => {
        div.addEventListener("mouseenter",(e) => {
            e.target.style.background = pickRandomColor();
        });
    });
}

function pickRandomColor() {
    return 'rgba(' + randomRGBValue() + ',' + randomRGBValue() + ',' + randomRGBValue() + ',' + Math.random() + ')';
    function randomRGBValue(){
        return Math.floor(Math.random() * 255);
    }
}

const gradualFillButton = document.querySelector("#gradual-fill");
gradualFillButton.addEventListener('click', () =>{
    gridPrompt();
    fillSquareGradual();
});

function fillSquareGradual(){
    const gridSquare = document.querySelectorAll('[class^="grid-square-"]');
    gridSquare.forEach((div) => {
        let opacity= 0;
        div.addEventListener("mouseenter",(e) => {
            opacity += .1;
            e.target.style.background = "rgba(0,0,0,"+ opacity +")";
        });
    });
}