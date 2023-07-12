const container = document.querySelector('.container');
const slider = document.querySelector("#range-input")
const colorPicker = document.querySelector('#color-picker');
let activeColor = colorPicker.value;

function resize(gridSize = 16) {
  /* resize function first removes all children of the container div and inserts the specified
  amount (gridSize parameter) of squares in the container div. By default gridSize = 16*/
  reset();
  for(let i = 1; i <=  gridSize*gridSize; i++){
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-element');
    container.appendChild(gridElement);
    container.setAttribute('style', `grid-template-rows: repeat(${gridSize}, 1fr);
    grid-template-columns: repeat(${gridSize}, 1fr);`);
  }
  slider.value = `${gridSize}`;
}

resize();



slider.addEventListener('mouseup', () => {
  resize(slider.value);
})


function reset() {
  // reset function removes all the existing children of the container element
  container.textContent = '';
}

const resetButton = document.getElementById('reset-button')
resetButton.addEventListener('click', () =>  clearGrid());


let mouseDown = false;
container.addEventListener('mousedown', () => mouseDown = true);
container.addEventListener('mouseup', () => mouseDown = false);

container.addEventListener('mouseover', draw);
container.addEventListener('mousedown', draw);


function draw (event) {
  if(mouseDown){
    event.target.style.backgroundColor = activeColor;
  }
}

function changeColor(color) {
  activeColor = color;
}


colorPicker.addEventListener('input', (e) => {
  activeColor = e.target.value;
})

function clearGrid() {
  const squares = document.querySelectorAll('.grid-element');
  squares.forEach(square => {
    square.style.backgroundColor = 'white';
  });
}

const eraseButton = document.getElementById('eraser')
eraseButton.addEventListener('mousedown', () => {
  activeColor = '#ffffff'
  eraseButton.classList.add("active")
  drawButton.classList.remove("active")
})


const drawButton = document.getElementById('draw');
drawButton.addEventListener('mousedown', (e) => {
  activeColor = colorPicker.value;
  eraseButton.classList.remove("active")
  drawButton.classList.add("active")
})