const generateButton = document.getElementById('generateButton');
const gridSizeInput = document.getElementById('gridSizeInput');
const gridContainer = document.querySelector('.grid-container');

function createGrid(n) {
    gridContainer.innerHTML = ''; // Clear existing grid items
    
    gridContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    
    for (let i = 0; i < n * n; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);

        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'black';
        });
    }
}

generateButton.addEventListener('click', () => {
    const gridSize = parseInt(gridSizeInput.value);
    if (!isNaN(gridSize)) {
        createGrid(gridSize);
    }
});


