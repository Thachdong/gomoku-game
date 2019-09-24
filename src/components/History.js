import React from 'react';

export default function History(props) {
  const {history, xIsNext, jumpToHistory, winner} = props;
  let status = null;
  winner ? status = `Winner: ${winner}` :
  xIsNext ? status = "Round of: X" : status = "Round of: O";
  // calculate status

  let disc = null;
  const moveToList = history.map((move, step) => {
    step ? disc = `Go to step # ${step}.` : disc = "Go to start."
    return (
      <li 
        key={step}
        onClick={() => jumpToHistory(step)}  
      >
        {disc}
      </li>
    );
  });
  // calculate history list

  return (
    <div>
      <div>{status}</div>
      <ol>{moveToList}</ol>
    </div>
  )
}
