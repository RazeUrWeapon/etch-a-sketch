// Create 256 (16x16) div elements for game board
function gameBoard() {
    const createSquares = document.getElementById('gameboard');

    for (i = 0; i < 256; i++) {
        createSquares.innerHTML += '<div class="square"></div>';
    }
}

gameBoard()