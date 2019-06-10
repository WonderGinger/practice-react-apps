import React, { Component } from 'react'
import Column from './Column';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          name: "Col 1",
          cards: ["Card A"]
        },
        {
          name: "Col 2",
          cards: ["Card B"]
        },
        {
          name: "Col 3",
          cards: ["Card C"]
        },
        {
          name: "Col 4",
          cards: ["Card D"]
        },
      ]
    }
  }
  handleAddCard = (columnIndex) => {
    const text = window.prompt("Enter card text");
    if (!text) return;
    this.setState(prevState => {
      let columns = prevState.columns;
      columns[columnIndex].cards.push(text);
      return { columns };
    })
  }
  handleCardMove = (columnIndex, cardIndex, direction) => {
    this.setState(prevState => {
      let columns = prevState.columns;
      const card = columns[columnIndex].cards.splice(cardIndex, 1);
      columns[columnIndex + direction].cards.push([card]);
      return { columns };
    });
  }
  render() {
    return (
      <div style={styles.board}>
        {this.state.columns.map((column, columnIndex) => (
          <Column
            column={column}
            columnIndex={columnIndex}
            key={columnIndex}
            handleAddCard={() => this.handleAddCard(columnIndex)}
            onMoveLeft={cardIndex => this.handleCardMove(columnIndex, cardIndex, -1)}
            onMoveRight={cardIndex => this.handleCardMove(columnIndex, cardIndex, 1)}
          />
        ))}
      </div>
    )
  }
}

const styles = {
  board: {
    display: 'flex',
  },
}