const container = document.querySelector('.container');
const slider = document.querySelector("#range-input")
const colorPicker = document.querySelector('#color-picker');
let activeColor = colorPicker.value;
let currentMode = 'color';

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
    if(currentMode === 'color') event.target.style.backgroundColor = activeColor;
    if(currentMode === 'erase') event.target.style.backgroundColor = activeColor;
    if(currentMode === 'rainbow') event.target.style.backgroundColor = random();
  }}

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
  eraseButton.classList.add("active");
  drawButton.classList.remove("active");
  rainbowButton.classList.remove('active');
  currentMode = 'erase'
})

const drawButton = document.getElementById('draw');
drawButton.addEventListener('mousedown', (e) => {
  activeColor = colorPicker.value;
  drawButton.classList.add("active");
  eraseButton.classList.remove("active");
  rainbowButton.classList.remove('active');
  currentMode = 'color';
})


function random() {
  const randomNo = Math.floor(Math.random() * 361)
  return `hsl(${randomNo}, 100%, 50%)`;
}

const rainbowButton = document.querySelector("#rainbow");
rainbowButton.addEventListener("click", () => {
  rainbowButton.classList.add('active');
  eraseButton.classList.remove("active");
  drawButton.classList.remove("active");
  currentMode = 'rainbow';
});

