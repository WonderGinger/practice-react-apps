import React from 'react'
import './App.css';

const Card = ({ card, cardIndex, canMoveLeft, canMoveRight, onMoveLeft, onMoveRight }) => {
  return (
    <div className="card">
        {canMoveLeft && <button onClick={ onMoveLeft}>{'<'}</button>}
        <span>{card}</span>
        {canMoveRight && <button onClick={onMoveRight}>{'>'}</button>}
    </div>
  )
}

export default Card
