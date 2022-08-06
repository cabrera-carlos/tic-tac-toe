import { calculateWinner } from './Utils.js';

export function Status({ currentStep, xIsNext }) {
  const winner = calculateWinner(currentStep.squares);
  let status;

  if (winner) {
    status = <p style={{ color: 'red' }}>{`Winner: ${winner}`}</p>;
  } else {
    status = <p>{`Next player: ${xIsNext ? 'X' : 'O'}`}</p>;
  }

  return <div>{status}</div>;
}

export function Moves({ history, jumpTo, stepNumber }) {
  const moves = history.map((_, index) => {
    let desc;

    if (index) {
      desc = `Go to move # ${index}`;
      desc =
        index === stepNumber ? (
          <span>
            <b>{desc}</b>
          </span>
        ) : (
          <span>{desc}</span>
        );
    } else {
      desc = <span>{'Go to game start'}</span>;
    }

    return (
      <li key={index}>
        <button onClick={() => jumpTo(index)}>{desc}</button>
      </li>
    );
  });

  return <ol>{moves}</ol>;
}
