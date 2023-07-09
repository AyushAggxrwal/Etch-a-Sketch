const container = document.querySelector('.container');

function resize(gridSize = 16) {
  for(let i = 1; i <=  gridSize*gridSize; i++){
      const gridElement = document.createElement('div');
      gridElement.classList.add('grid-element');
      container.appendChild(gridElement);
      container.setAttribute('style', `grid-template-rows: repeat(${gridSize}, 1fr);
      grid-template-columns: repeat(${gridSize}, 1fr);`)
    }
}

resize();


const slider = document.querySelector("#range-input")

slider.addEventListener('mouseup', () => {
  resize(slider.value);
})
