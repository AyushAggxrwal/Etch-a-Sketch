const container = document.querySelector('.container');
const slider = document.querySelector("#range-input")

function resize(gridSize = 16) {
  /* resize function first removes all children of the container div and inserts the specified
  amount (gridSize parameter) of squares in the container div. By default gridSize = 16*/
  reset();
  for(let i = 1; i <=  gridSize*gridSize; i++){
      const gridElement = document.createElement('div');
      gridElement.classList.add('grid-element');
      container.appendChild(gridElement);
      container.setAttribute('style', `grid-template-rows: repeat(${gridSize}, 1fr);
      grid-template-columns: repeat(${gridSize}, 1fr);`)
    }
    slider.value = `${gridSize}`
}

resize();



slider.addEventListener('mouseup', () => {
  resize(slider.value);
})

const resetButton = document.getElementById('reset-button')

function reset() {
  // reset function removes all the existing children of the container element
  container.textContent = '';
}

resetButton.addEventListener('click', () =>  resize())