'use strct'

const baseContainer = document.querySelector('.base-container');
const changeGridButton = document.querySelector('.change-grid');
const clearGridButton = document.querySelector('.clear-grid');

let gridContainer = document.querySelector('.grid-container');
let size = 50;

function createGridItem() {
  const item = document.createElement('div');
  item.classList.add('grid-item');

  item.addEventListener('mouseenter', () => {
    item.classList.add('grid-item-colored');
    const bgColor = window.getComputedStyle(item).backgroundColor;
    let alpha = parseFloat(bgColor.slice(0, -1).split(',')[3]);

    if (alpha < 1) {
      const newAlpha = alpha + 0.1;
      let newBgColor = bgColor;

      if (alpha == 0.1) {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        const randomBgColor = `rgba(${r}, ${g}, ${b}, ${newAlpha})`
        newBgColor = randomBgColor;
      } else {
        newBgColor = bgColor.replace(alpha, newAlpha);
      }

      item.style.backgroundColor = newBgColor;
    }
  });

  return item;
}

function renderGrid() {
  if (isNaN(size) || size <= 1) { size = 2 };
  if (size > 100) { size = 100; };

  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row');
    gridContainer.appendChild(row);

    for (let j = 0; j < size; j++) {
      const item = createGridItem();
      row.appendChild(item);
    }
  }
}

function clearGrid() {
  baseContainer.removeChild(gridContainer);
  gridContainer = document.createElement('div');
  gridContainer.classList.add('grid-container');
  baseContainer.appendChild(gridContainer);
}

changeGridButton.addEventListener('click', () => {
  size = prompt('Input a size between 1-100.');
  clearGrid();
  renderGrid();
});

clearGridButton.addEventListener('click', () => {
  clearGrid();
  renderGrid();
});

renderGrid();
