
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
