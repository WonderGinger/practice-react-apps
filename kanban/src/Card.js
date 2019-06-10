import React from 'react';

const Card = ({ 
    card, 
    onMoveLeft, 
    onMoveRight, 
    canMoveLeft, 
    canMoveRight 
}) => {
    return (
        <div className="card">
            {<button onClick={onMoveLeft}>{'<'}</button>}
            <span>{card.name}</span>
            {<button onClick={onMoveRight}>{'>'}</button>}
        </div>
    )
}

export default Card
