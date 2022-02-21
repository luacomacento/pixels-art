/* eslint-disable sonarjs/cognitive-complexity */
const clearBoardBtn = document.getElementById('clear-board');
const colorBlocks = document.querySelectorAll('.color');
let selectedColor = 'black';

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');

  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

function getRandomColor() {
  const n1 = Math.floor(Math.random() * 256);
  const n2 = Math.floor(Math.random() * 256);
  const n3 = Math.floor(Math.random() * 256);

  console.log(`rgb(${n1}, ${n2}, ${n3})`);
  return `rgb(${n1}, ${n2}, ${n3})`;
}

function createColorPicker() {
    for (let i = 1; i < colorBlocks.length; i += 1) {
        colorBlocks[i].style.backgroundColor = getRandomColor();
      }
      
}

createColorPicker();

document.addEventListener('mouseup', function (event) {
    if (event.target.classList.contains('color')) {
        if (event.button == 0) {
            document.querySelector('.selected').classList.remove('selected');
        event.target.classList.add('selected');
        selectedColor = window.getComputedStyle(event.target).getPropertyValue('background-color');
        console.log('Cor selecionada: ' + selectedColor);
        }
    }

    if(event.target.classList.contains('pixel')) {
        if (event.button == 1) {
            event.target.style.backgroundColor = 'white';
        } else {
            event.target.style.backgroundColor = selectedColor;
        }
    }
});

clearBoardBtn.addEventListener('click', clearBoard);

const vqvButton = document.getElementById('generate-board');
const boardInput = document.getElementById('board-size');
const pixelBoard = document.getElementById('pixel-board');

function removeBoard() {
    for (let i = pixelBoard.childNodes.length - 1; i >= 0; i -= 1) {
        pixelBoard.removeChild(pixelBoard.childNodes[i]);
    }
}

function generateBoard(size) {
    if (size) {
        let newSize = size;
        removeBoard();
        if (size < 5) {
            newSize = 5;
        }
        if (size > 50) {
            newSize = 50;
        }

        for (let i = 0; i < newSize; i += 1) {
            const newLine = document.createElement('div');
            newLine.className = 'pixel-line';
            pixelBoard.appendChild(newLine);
            for (let i = 0; i < newSize; i += 1) {
                const newPixel = document.createElement('div');
                newPixel.className = 'pixel';
                newLine.appendChild(newPixel);
            }
        }
    } else {
        alert('Board inválido!');
    }
}

function resizeBoard() {
    generateBoard(boardInput.value);
}

vqvButton.addEventListener('click', resizeBoard);

const changeColorsBtn = document.getElementById('change-colors');
changeColorsBtn.addEventListener('click', createColorPicker);
