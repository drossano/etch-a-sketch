const container = document.querySelector('#grid-container');

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
    fillSquare(gridSquare);
}

drawGrid(16);

function fillSquare(gridSquare){
    gridSquare.forEach((div) => {
        div.addEventListener("mouseenter",(e) => {
            e.target.style.background = "black";
        });
    });
}

const button = document.querySelector("button");
button.addEventListener('click', () =>{
    gridDimension = prompt ();
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    drawGrid(gridDimension);
});