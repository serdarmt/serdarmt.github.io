
const AI = "O";
const HUMAN = "X";
let scoreX = 0;
let scoreO = 0;
let humanTurn = true;
let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

function isGameOver(board) {
    if (isBoardFull(board)) {
        return true;
    }

    if (hasWon(board, AI)) {
        return true;
    }
    
    if (hasWon(board, HUMAN)) {
        return true;
    }
    
    return false;
}

function hasWon(board, player) {
  for (let i = 0; i < 3; i++) {
    if (
      (board[i][0] === player && board[i][1] === player && board[i][2] === player) ||
      (board[0][i] === player && board[1][i] === player && board[2][i] === player)
    ) {
      return true;
    }
  }
  return (
    (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
    (board[0][2] === player && board[1][1] === player && board[2][0] === player)
  );
}

function isBoardFull(board) {
  for (let row of board) {
    for (let cell of row) {
      if (cell === "") return false;
    }
  }
  return true;
}

function getEmptyCells(board) {
  const emptyCells = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === "") {
        emptyCells.push([row, col]);
      }
    }
  }
  return emptyCells;
}

function evaluate(board) {
  if (hasWon(board, AI)) {
    return 1;
  } else if (hasWon(board, HUMAN)) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeta(board, depth, alpha, beta, maximizingPlayer) {
  if (isGameOver(board) || depth === 0) {
    return evaluate(board);
  }

  let bestScore;
  if (maximizingPlayer) {
    bestScore = -Infinity;
    for (let [row, col] of getEmptyCells(board)) {
      board[row][col] = AI;
      const score = alphabeta(board, depth - 1, alpha, beta, false);
      board[row][col] = "";
      bestScore = Math.max(bestScore, score);
      alpha = Math.max(alpha, bestScore);

      if (beta <= alpha) {
        break;
      }
    }
  } else {
    bestScore = Infinity;
    for (let [row, col] of getEmptyCells(board)) {
      board[row][col] = HUMAN;
      const score = alphabeta(board, depth - 1, alpha, beta, true);
      board[row][col] = "";
      bestScore = Math.min(bestScore, score);
      beta = Math.min(beta, bestScore);

      if (beta <= alpha) {
        break;
      }
    }
  }
  return bestScore;
}

function getBestMove(board) {
  let bestMove = null;
  let bestScore = -Infinity;
  for (let [row, col] of getEmptyCells(board)) {
    board[row][col] = AI;
    const score = alphabeta(board, 9, -Infinity, Infinity, false);
    board[row][col] = "";
    if (score > bestScore) {
      bestScore = score;
      bestMove = [row, col];
    }
  }
  return bestMove;
}

function makeMove(row, col) {
  if (board[row][col] !== "" || isGameOver(board)) {
    return;
  }
  if (humanTurn) {
    board[row][col] = HUMAN;
    humanTurn = false;
    updateBoard();
    if (!isGameOver(board)) {
      const [aiRow, aiCol] = getBestMove(board);
      board[aiRow][aiCol] = AI;
      humanTurn = true;
      updateBoard();
    }
  }

  checkWinner();
}

function updateBoard() {
  const cells = document.querySelectorAll(".cell");
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const index = row * 3 + col;
      cells[index].textContent = board[row][col];
    }
  }
}

function updateScoreDisplay() {
    document.getElementById("scoreX").textContent = scoreX;
    document.getElementById("scoreO").textContent = scoreO;
}

function newGame() {
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];

    const gameMessageElement = document.getElementById("gameMessage");
    gameMessageElement.style.display = "none";
    humanTurn = true;
    updateBoard();
}

function checkWinner() {
  const gameMessageElement = document.getElementById("gameMessage");
    if (hasWon(board, AI)) {
      scoreO++;
      gameMessageElement.textContent = "AI wins!";
      gameMessageElement.style.display = "block";
    }
    else if (hasWon(board, HUMAN)) {
      scoreX++;
      gameMessageElement.textContent = "You win!";
      gameMessageElement.style.display = "block";
    }
    else if (isBoardFull(board)) {
      gameMessageElement.textContent = "It's a draw!"
      gameMessageElement.style.display = "block";
    }
    else {
      gameMessageElement.style.display = "none";
    }
    updateScoreDisplay();
    return;
}

document.getElementById("newGame").addEventListener("click", newGame);
newGame();
