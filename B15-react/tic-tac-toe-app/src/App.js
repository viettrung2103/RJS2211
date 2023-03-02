import { useState } from "react";

function Square({ value, onSquareClick }) {
  // const [value, setValue] = useState(null); // set the initial state and value: initial value is Null and the setValue will render the initial value to the browswer

  // function handleClick() {
  //   setValue("X");
  // }
  // pass a function from Board/ parent component to child
  // OnClick la state cua button, khi user click, onstate se nhan prop la onSquareClick
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null)); // set a initial state with an array with 9 items, default values of each of them is null [null,null,...]
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  function handleClick(i) {
    const nextSquare = squares.slice(); // create a deep copy, when modify this array won't affect the initial array, which will be used when reset state
    if (nextSquare[i] || calculateWinner(squares)) {
      return;
    }
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setSquares(nextSquare); // tell react that the state has change, update new state, render the updated state
    setXIsNext(!xIsNext); // after click the first square, change the stage to the opposite, so when the next square is click>> it will be O. ex: true > X > false. flase > O > true
  }
  // khi click vo o nao, array cua o do dc call, vi index dc pass vo handleClick(i) giong value squares[i]

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}
// export default function App() {
//   return
// }
