
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let activePlayer = 1;
let winMessage = document.getElementById("win-message");
let scoreboardX = document.getElementById("scoreboard-x");
let scoreboardO = document.getElementById("scoreboard-o");

scoreboardX.innerText = sessionStorage.getItem("XWins") || 0;
scoreboardO.innerText = sessionStorage.getItem("OWins") || 0;

for (let i = 0; i < 9; i++) {
    let cell = document.getElementById(`square-${i}`);
    cell.addEventListener("click", handleCellClick);
}

function restartBoard() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    activePlayer = 1;

    for (let i = 0; i < 9; i++) {
        let cell = document.getElementById(`square-${i}`);
        cell.innerText = '';
    }

    for (let i = 0; i < 9; i++) {
        let cell = document.getElementById(`square-${i}`);
        cell.addEventListener("click", handleCellClick);
    }

    winMessage.innerText = '';

}

function handleCellClick(event) {
    let cellIndex = event.target.id[event.target.id.length - 1];
    console.log(cellIndex)

    if (activePlayer == 1) {
        event.target.innerText = "X";
        gameBoard[cellIndex] = 1;
        activePlayer = 2;
        event.target.removeEventListener("click", handleCellClick);

        if (checkTie()) {
            winMessage.innerText = "Tie";
        }
        if (checkWin(1)) {
            winMessage.innerText = "Player 1 Has Won";
            let value = Number(sessionStorage.getItem("XWins")) || 0;
            value += 1;
            sessionStorage.setItem("XWins", value);
            scoreboardX.innerText = sessionStorage.getItem("XWins") || 0;
        }
    
    } else if (activePlayer == 2) {
        event.target.innerText = "O";
        gameBoard[cellIndex] = 2;
        activePlayer = 1;
        event.target.removeEventListener("click", handleCellClick);
        if (checkTie()) {
            winMessage.innerText = "Tie";
        }
        if (checkWin(2)) {
            winMessage.innerText = "Player 2 Has Won";
            let value2 = Number(sessionStorage.getItem("OWins")) || 0;
            value2 += 1;
            sessionStorage.setItem("OWins", value2);
            scoreboardO.innerText = sessionStorage.getItem("OWins") || 0;
        }
    }
}

function checkWin(player) {
    if (gameBoard[0] == player && gameBoard[1] == player && gameBoard[2] == player) {
        return true;
    } else {
        return false;
    }
}

function checkTie() {
    if (typeof gameBoard[0] === "number" &&
        typeof gameBoard[1] === "number" &&
        typeof gameBoard[2] === "number" &&
        typeof gameBoard[3] === "number" &&
        typeof gameBoard[4] === "number" &&
        typeof gameBoard[5] === "number" &&
        typeof gameBoard[6] === "number" &&
        typeof gameBoard[7] === "number" &&
        typeof gameBoard[8] === "number"
    ) {
        return true;
    } return false;
}

let playAgainButton = document.getElementById("button-play-again");
playAgainButton.addEventListener("click", restartBoard);