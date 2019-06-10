import React, { Component } from 'react'
import Column from './Column';

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    name: "Ideas",
                    cards: [{ name: "Card A"}],
                },
                {
                    name: "Backlog",
                    cards: [{ name: "Card B"}],
                },
                {
                    name: "In progress",
                    cards: [{ name: "Card C"}],
                },
                {
                    name: "Completed",
                    cards: [{ name: "Card D"}],
                },
            ]
        };
    };
    handleMove = (columnIndex, cardIndex, direction) => {
        this.setState(prevState => {
            const { columns } = prevState;
            const [card] = columns[columnIndex].cards.splice(cardIndex, 1);
            columns[columnIndex + direction].cards.push(card);
            return { columns };
        });
    }
    handleAdd = columnIndex => {
        const name = window.prompt("Name?");
        if (!name) return;
        const card = { name };
        this.setState(prevState => {
            const { columns } = prevState;
            columns[columnIndex].cards.push(card);
            return { columns };
        });
    }
    render() {
        return (
            <div className="App">
                {this.state.columns.map((column, columnIndex) => (
                    <Column 
                        key={columnIndex} 
                        column={column} 
                        columnIndex={columnIndex}
                        onMoveLeft={cardIndex => this.handleMove(columnIndex, cardIndex, -1)}
                        onMoveRight={cardIndex => this.handleMove(columnIndex, cardIndex, 1)}
                        onAddCard={() => this.handleAdd(columnIndex)}
                    />
                ))}
            </div>
        )
    }
}
