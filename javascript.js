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
}

const board = gameBoard();

function gameController(player1, player2, board) {
  board.setCell(0, 1);
  board.setCell(1, 2);
  board.setCell(2, 2);
  board.setCell(3, 2);
  board.setCell(4, 1);
  board.setCell(5, 1);
  board.setCell(6, 1);
  board.setCell(7, 2);
  board.setCell(8, 2);
  let currentBoard = board.getBoard();
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
      gameReset(board);
      console.log(board.getBoard());
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
          gameReset(board);
          console.log(board.getBoard());
        }
    else if(!currentBoard.includes(0)){
      console.log("It's a draw");
      gameReset(board);
      console.log(board.getBoard());
    }
      

  console.log(board.getBoard());
  return board.getBoard();
}

let player1 = { name: "Vlad" };
let player2 = { name: "Dinca" };

gameController(player1, player2, board);
console.log(board.getBoard()); 