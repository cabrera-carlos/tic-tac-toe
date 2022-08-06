import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Board from './Board.js';
import { Status } from './Info.js';
import { Moves } from './Info.js';
import { calculateWinner } from './Utils.js';
import './index.css';

function Game() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(position) {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();

    // If there is a winner or the same position is clicked again, do not update the state
    if (calculateWinner(squares) || squares[position]) return;

    // Add step to the squares
    squares[position] = xIsNext ? 'X' : 'O';

    // Set game state
    setHistory(newHistory.concat([{ squares: squares }]));
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  }

  // Move to "index" in history
  function jumpTo(index) {
    setStepNumber(index);
    setXIsNext(index % 2 === 0);
  }

  return (
    <div className='game'>
      <div className='game-board'>
        <Board
          currentStep={history[stepNumber]}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className='game-info'>
        <Status currentStep={history[stepNumber]} xIsNext={xIsNext} />
        <Moves history={history} jumpTo={jumpTo} stepNumber={stepNumber} />
      </div>
    </div>
  );
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);
