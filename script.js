let currentPlayer = 'X';
let gameOver = false;

function makeMove(cell) {
    if (!cell.innerText && !gameOver) {
        cell.innerText = currentPlayer;
        if (checkWinner(currentPlayer)) {
            document.getElementById('result').innerText = `Player ${currentPlayer} wins!`;
            gameOver = true;
        } else if (isBoardFull()) {
            document.getElementById('result').innerText = "It's a draw!";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner(player) {
    const cells = document.getElementsByClassName('cell');
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winningCombos.some(combination => {
        return combination.every(index => cells[index].innerText === player);
    });
}

function isBoardFull() {
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        if (!cell.innerText) return false;
    }
    return true;
}

function resetGame() {
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
    document.getElementById('result').innerText = '';
    currentPlayer = 'X';
    gameOver = false;
}

