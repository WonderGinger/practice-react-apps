import React, { Component } from 'react'
import Board from './Board';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }
  handleClick = i => {
    let squares = this.state.squares;
    if (squares[i] || checkWinner(squares)) return;
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    }) 
  }
  render() {
    return (
      <div>
        <Board
          squares={this.state.squares}
          onClick={i => this.handleClick(i)}
        />
      </div>
    )
  }
}

const checkWinner = squares => {
  const winCons = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ]
  for (let con of winCons) {
    let [a, b, c] = con;
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return true;
  }
  return false;
}