const container = document.querySelector('#grid-container');

const gridDimension = 16

for (let i = 0; i < gridDimension; i++){
    const gridColumn = document.createElement('div');
    gridColumn.classList.add('grid-column-' + i);
    container.appendChild(gridColumn);
    gridColumn.setAttribute('style', 'border:2px solid black; height: 100%; width: 100%;');
}


