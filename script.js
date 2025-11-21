
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
            removeAllEventListeners();
       
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
            removeAllEventListeners();
       
            let value2 = Number(sessionStorage.getItem("OWins")) || 0;
            value2 += 1;
            sessionStorage.setItem("OWins", value2);
            scoreboardO.innerText = sessionStorage.getItem("OWins") || 0;
        }
    }
 }
 