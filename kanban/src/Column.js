import React from 'react';
import Card from './Card';

const Column = ({ column, columnIndex, onMoveLeft, onMoveRight, onAddCard }) => {
    return (
        <div className="column">
            <h1>{column.name}</h1>
            {column.cards.map((card, cardIndex) => (
                <Card 
                    key={cardIndex} 
                    card={card} 
                    onMoveLeft={() => onMoveLeft(cardIndex)}
                    onMoveRight={() => onMoveRight(cardIndex)}
                    canMoveleft={columnIndex !== 0}
                    canMoveRight={columnIndex !== 3}
                />
            ))}
            <button onClick={onAddCard}>+</button>
        </div>
    )
}

export default Column
