import React, { Component } from 'react';
import Board from './Board';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      stepCount: 0,
    };
  }

  handleClick = index => {
    let newSquares = this.state.squares.slice();
    if (newSquares[index] || this.checkWinner()) {
      return;
    }
    newSquares[index] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      squares: newSquares,
      xIsNext: !this.state.xIsNext,
      stepCount: this.state.stepCount + 1
    });
  }

  checkWinner = () => {
    let squares = this.state.squares;
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

  render() {
    return (
      <div style={styles.app}>
        <Board squares={this.state.squares} onClick={index => this.handleClick(index)}/>
      </div>
    )
  }
}

const styles = {
  app: {
    margin: 100
  }
}

export default App
