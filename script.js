const container = document.querySelector('#grid-container');

const gridDimension = 16

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


