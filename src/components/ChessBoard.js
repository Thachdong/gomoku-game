import React from 'react';
import Square from './Square';

export default function ChessBoard(props) {
  const currentSquares = props.currentSquares.map((square, index) => {
    return (
      <Square 
        square={square}
        key={index}
        handleClick={() => props.handleClick(index)}
      />
    );
  });

  let chessBoard = [];
  let row = [];
  const length = currentSquares.length;
  for (let i = 0; i < length; i += 3) {
    row = currentSquares.slice(i, i + 3);
    chessBoard.push(
      <tr key={i}>{row}</tr>
    );
  }

  return (
    <table className="chess-board">
      <tbody>
        {chessBoard}
      </tbody>
    </table>
  )
}
