function Square({ value, onClick }) {
  return (
    <button className='square' onClick={onClick}>
      {value}
    </button>
  );
}

export default function Board({ currentStep, onClick }) {
  function renderSquare(i) {
    return <Square value={currentStep.squares[i]} onClick={() => onClick(i)} />;
  }

  return (
    <div>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
