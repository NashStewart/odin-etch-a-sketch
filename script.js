'use strct'
console.log('Hello, World!');

const gridContainer = document.querySelector('.grid-container');

function renderGrid() {
  for (let i = 0; i < 16; i++) {
    const element = document.createElement('div');
    element.classList.add('grid-item');
    gridContainer.appendChild(element);
  }
};

renderGrid();
