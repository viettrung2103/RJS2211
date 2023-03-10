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

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice(); // create a deep copy, when modify this array won't affect the initial array, which will be used when reset state
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
    // setSquares(nextSquare); // tell react that the state has change, update new state, render the updated state
    // setXIsNext(!xIsNext); // after click the first square, change the stage to the opposite, so when the next square is click>> it will be O. ex: true > X > false. flase > O > true
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  // khi click vo o nao, array cua o do dc call, vi index dc pass vo handleClick(i) giong value squares[i]

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
  const [history, setHistory] = useState([Array(9).fill(null)]); // initial state: [[null,null,..],] an array with a first item is a array with 9 items, filled with null value
  const [currentMove, setCurrentMove] = useState(0); //initial state of currentMove is move/index 0;
  // after click the first square, change the stage to the opposite, so when the next square is click>> it will be O. ex: true > X > false. flase > O > true
  const xIsNext = currentMove % 2 === 0; // when move is even, X play, when move is odd, O play, return true >> even >> x
  const currentSquares = history[currentMove]; // current step is the last index in history array, we dont need setState because it can use from setHistory

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; // this array will create a copy of history from 0 to the current move, +1 is to include the current move, without +1 will not include the current one but the one before it.
    setHistory(nextHistory); // spread syntax, creates a new array that contains all the items in history, followed by nextSquares
    setCurrentMove(nextHistory.length - 1); // the current move will the at the end of the current history
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  //As you iterate through history array inside the function you passed to map, the squares argument goes through each element of history, and the move argument goes through each array index: 0, 1, 2, ….
  const moves = history.map((squaresAtIndex, index) => {
    //
    let description;
    if (index > 0) {
      description = `Go to move # ${index}`;
    } else {
      description = `Go to game start`;
    }
    return (
      <li key={index}>
        <button onClick={() => jumpTo(index)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

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
      squares[a] && // nếu kí hiểu ở ô 1 (X) giống ô 2(X) giống ô 3 (X)
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
}
// export default function App() {
//   return
// }
