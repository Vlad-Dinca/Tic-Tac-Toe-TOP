const board = gameBoard();
let gameLocked = false;
let p1Score = 0;
let p2Score = 0;
let dScore = 0;
let turn = 1;


function gameBoard() {
  let game = [
    0,0,0,
    0,0,0,
    0,0,0
  ];

  const getBoard = () => game;
  const setBoard = (newBoard) => game = newBoard;
  const setCell = (index, value) => {
    game[index] = value;
  };

  return { setBoard, getBoard, setCell };
}

function gameReset(board){
  board.setBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
  cell.textContent="";
  })
  gameLocked = false;
  // playGame(player1, player2);
}

function cellClick(player1, player2){
  let turn = 1;
  let cells = document.querySelectorAll(".cell");

  cells.forEach((cell, index) =>{
    cell.dataset.index = index;
  })
  
  console.log(cells);
    cells.forEach((cell) =>{
      cell.addEventListener(("click"), () =>{
        
        if (gameLocked) return;
        
        let index = parseInt(cell.dataset.index);
        if (board.getBoard()[index] !== 0) return;


        if (turn === 1){
          cell.textContent = "X";
          board.setCell(index, turn);
          turn = 2;
        }
        else{
          cell.textContent = "O";
          board.setCell(index, turn);
          turn=1;
        }
        console.log(board.getBoard());

        gameController(player1, player2, board);     
    }) 
  })
}


function playGame(player1, player2){
  gameReset(board);
  cellClick(player1, player2);
  
}

function gameController(player1, player2, board) {

  let currentBoard = board.getBoard();
  let displayWinner = document.querySelector("#displayWinner");

  console.log(currentBoard);

  if ((currentBoard[0] === 1 && currentBoard[2] === 1 && currentBoard[1] === 1)
    ||(currentBoard[3] === 1 && currentBoard[4] === 1 && currentBoard[5] === 1)
    ||(currentBoard[6] === 1 && currentBoard[7] === 1 && currentBoard[8] === 1)
    ||(currentBoard[0] === 1 && currentBoard[3] === 1 && currentBoard[6] === 1)
    ||(currentBoard[1] === 1 && currentBoard[4] === 1 && currentBoard[7] === 1)
    ||(currentBoard[2] === 1 && currentBoard[5] === 1 && currentBoard[8] === 1)
    ||(currentBoard[0] === 1 && currentBoard[4] === 1 && currentBoard[8] === 1)
    ||(currentBoard[2] === 1 && currentBoard[4] === 1 && currentBoard[6] === 1)){

      console.log("Player 1 has won");
      p1Score++;
      displayWinner.textContent = `${player1} has won!`
      updateScoreboard(player1, player2)
      console.log(board.getBoard());
      gameLocked = true;
    }

  else if((currentBoard[0] === 2 && currentBoard[2] === 2 && currentBoard[1] === 2)
        ||(currentBoard[3] === 2 && currentBoard[4] === 2 && currentBoard[5] === 2)
        ||(currentBoard[6] === 2 && currentBoard[7] === 2 && currentBoard[8] === 2)
        ||(currentBoard[0] === 2 && currentBoard[3] === 2 && currentBoard[6] === 2)
        ||(currentBoard[1] === 2 && currentBoard[4] === 2 && currentBoard[7] === 2)
        ||(currentBoard[2] === 2 && currentBoard[5] === 2 && currentBoard[8] === 2)
        ||(currentBoard[0] === 2 && currentBoard[4] === 2 && currentBoard[8] === 2)
        ||(currentBoard[2] === 2 && currentBoard[4] === 2 && currentBoard[6] === 2)){

          console.log("Player 2 has won")
          p2Score++;
          displayWinner.textContent = `${player2} has won!`
          updateScoreboard(player1, player2)
          gameLocked = true;
        }
    else if(!currentBoard.includes(0)){
      console.log("It's a draw");
      dScore++;
      displayWinner.textContent = `It's a draw!`
      updateScoreboard(player1, player2)
      gameLocked = true;
    }
  return board.getBoard();
}

 function updateScoreboard(player1, player2){
    let player1Score = document.querySelector("#player1Score");
    let drawScore = document.querySelector("#drawScore");
    let player2Score = document.querySelector("#player2Score");

    player1Score.textContent=`${player1}: ${p1Score}`; 
    drawScore.textContent=`Draw: ${dScore}`; 
    player2Score.textContent=`${player2}: ${p2Score}`; 
  }


function Modal(){
  
  dialog = document.querySelector("dialog");
  dialog.show();

  exit = document.querySelector("#exit")
  exit.addEventListener("click", () =>{
    dialog.close();
  })

  player1 = document.querySelector("#player1").value;
  player2 = document.querySelector("#player2").value;

  play = document.querySelector("#play")
  play.addEventListener("click", ( )=>{
    playGame(player1, player2);
    updateScoreboard(player1, player2);
    dialog.close();
    
  })
}

Modal()

playButton = document.querySelector("#playAnother");
playButton.addEventListener("click", () => gameReset(board));
  


console.log(board.getBoard()); 