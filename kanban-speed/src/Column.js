import React from 'react';
import Card from './Card';
import './App.css';

const Column = ({ column, columnIndex, onAddCard, onMoveLeft, onMoveRight }) => {
  return (
    <div className="column">
      <h2>{column.title}</h2>
      {column.cards.map((card, cardIndex) => (
        <Card 
          card={card}
          cardIndex={cardIndex}
          canMoveLeft={columnIndex > 0}
          canMoveRight={columnIndex < 3}
          onMoveLeft={() => onMoveLeft(cardIndex)} 
          onMoveRight={() => onMoveRight(cardIndex)} 
          key={cardIndex}
        />
      ))}
      <button onClick={onAddCard}>+ new</button>
    </div>
  )
}

export default Column
