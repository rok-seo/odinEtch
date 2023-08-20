const grid = document.getElementById('grid');
const sizeSlider = document.getElementById('sizeSlider');
const sizeValue = document.getElementById('sizeValue');
const gridItem = document.getElementById('grid-item');
const colorSelect = document.getElementById('color');
const clearBtn = document.getElementById('clear');


let color = 'black';
function makeGrid(size) {
    grid.style.setProperty('--grid-rows', size);
    grid.style.setProperty('--grid-cols', size);
    for (i = 0; i < (size * size); i++) {
        let cell = document.createElement('div');
        grid.appendChild(cell).className = "grid-item";
        cell.addEventListener('mouseover', ()=> {
            cell.style.backgroundColor = color;
        });
        
    };
};

function clearGrid(){
    let element = document.querySelectorAll('.grid-item');
    element.forEach(item =>{
        item.remove();
    })
};


clearBtn.addEventListener('click', ()=>{
    clearGrid();
    makeGrid(sizeSlider.value);
})

colorSelect.addEventListener('input', ()=>{
    color = colorSelect.value

})

sizeSlider.onchange = () =>{
    sizeValue.innerHTML = `Size: ${sizeSlider.value} x ${sizeSlider.value}`;
    clearGrid();
    makeGrid(sizeSlider.value);
}

makeGrid(32);

