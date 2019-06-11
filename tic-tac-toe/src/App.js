import React, { Component } from 'react';
import Board from './Board';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
          squares:  Array(9).fill(null)
      }],
      xIsNext: true,
      stepCount: 0,
    };
  }

  handleClick = index => {
    let squares = this.state.history[this.state.stepCount].squares.slice(0, this.state.stepCount + 1);
    if (squares[index] || checkWinner(squares)) {
      return;
    }
    squares[index] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: [...this.state.history, { squares }],
      xIsNext: !this.state.xIsNext,
      stepCount: this.state.history.length
    });
  };

  timeTravel = step => {
    this.setState({
      stepCount: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepCount];
    return (
      <div style={styles.app}>
        <Board 
          squares={current.squares} 
          onClick={index => this.handleClick(index)}
        />

        <div style={styles.gameInfo}>
          {this.state.history.map(({square}, step) => (
            <button key={step} onClick={() => this.timeTravel(step)}>
                Turn {step}
            </button>
          ))}
        </div>
      </div>
    )
  }
}

const checkWinner = squares => {
  const winCons = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let con of winCons) {
    let [a, b, c] = con;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return true;
    }
  }
  return false;
}

const styles = {
  app: {
    display: 'flex',
    margin: 100,
  },
  gameInfo: {
    flexGrow: .2,
    display: 'flex',
    flexDirection: 'column',
    margin: 5,
    border: "1px solid blue",
  }
}

export default App
