import React, { Component } from 'react'
import Column from './Column';

import './App.css';


export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      columns: [
        {
          title: "Column 1",
          cards: ["Card A"]
        },
        {
          title: "Column 2",
          cards: ["Card B"]
        },
        {
          title: "Column 3",
          cards: ["Card C"]
        },
        {
          title: "Column 4",
          cards: ["Card D"]
        },
      ]
    };
  }

  handleCard = columnIndex => {
    const card = window.prompt("Enter card text");
    let columns = this.state.columns.slice();
    columns[columnIndex].cards.push(card);
    this.setState({
      columns: columns
    })
  } 

  handleMove = (columnIndex, cardIndex, direction) => {
    let columns = this.state.columns.slice();
    let card = columns[columnIndex].cards.splice(cardIndex, 1);
    columns[columnIndex + direction].cards.push(card);
    this.setState({
      columns: columns
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.columns.map((column, columnIndex) => (
          <Column 
            column={column} 
            columnIndex={columnIndex}
            onAddCard={() => this.handleCard(columnIndex)}
            onMoveLeft={cardIndex => this.handleMove(columnIndex, cardIndex, -1)}
            onMoveRight={cardIndex => this.handleMove(columnIndex, cardIndex, 1)}
            key={columnIndex}
          />
        ))}
      </div>
    )
  }
}

