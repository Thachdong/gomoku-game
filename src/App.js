import React, { Component } from 'react';
import ChessBoard from './components/ChessBoard';
import History from './components/History';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      xIsNext: true,
      stepNum: 0
    }
  }

  handleClick = (index) => {
    const {xIsNext} = this.state;
    const history = this.state.history.slice();
    const current = history[history.length - 1];
    const currentSquares = current.squares.slice();
    // coppy current squares
    const winner = this.getWinner(currentSquares);
    if (currentSquares[index] || winner) {return}
    // disabled square that had value
    xIsNext ? currentSquares[index] = "X" : currentSquares[index] = "O"
    // sign value for square clicked
    this.setState(
      () => {
        return {
          history: history.concat([
            {squares: currentSquares}
          ]),
          xIsNext: !xIsNext,
          stepNum: history.length
        }
      }
    );
    // update new state
  }

  jumpToHistory = (step) => {
    this.setState(
      () => {
        return {
          xIsNext: (step % 2 === 0),
          stepNum: step
        }
      }
    );
  }

  getWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    const length = lines.length;
    for (let i = 0; i < length; i++) {
      let [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    const history = this.state.history.slice();
    const {xIsNext, stepNum} = this.state;
    const currentSquares = history[stepNum].squares;
    // throught current squares to chess board
    const winner = this.getWinner(currentSquares);

    return (
      <div className="game">
        <ChessBoard 
          currentSquares={currentSquares}
          handleClick={this.handleClick}
        />
        <History 
          history={history}
          xIsNext={xIsNext}
          jumpToHistory={this.jumpToHistory}
          winner={winner}
        />
      </div>
    )
  }
}
