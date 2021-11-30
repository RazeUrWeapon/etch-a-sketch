const clearBtn = document.querySelector('button');
const gameBoard = document.getElementById('gameboard');

let size = 18 

// Create 256 (16x16) div elements for first game board
function generateBoard() {
    gameBoard.style.gridTemplateColumns = `repeat(${size}, ${size}fr)`;
    gameBoard.style.gridTemplateRows = `repeat(${size}, ${size}fr)`;

    for (i = 0; i < size * size; i++) {
        const newElement = document.createElement('div');
        newElement.addEventListener('mouseover', hover);
        gameBoard.appendChild(newElement);
    }
}

function hover(e) {
    e.target.style.backgroundColor = 'darkgray';
}

generateBoard();



clearBtn.addEventListener('click', () => {
    gameBoard.innerHTML = '';
    size = prompt('Pick your board size:');
    if (size > 100) {
        size = prompt('Please pick a number below 100');
    } else {
        generateBoard();
    }
});