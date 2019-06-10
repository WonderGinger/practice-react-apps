import React from 'react';
import Card from './Card';
import MuiCard from '@material-ui/core/Card';
import { Button } from '@material-ui/core'
import { blueGrey } from '@material-ui/core/colors';



const Column = ({ 
    column, 
    columnIndex, 
    handleAddCard, 
    onMoveLeft, 
    onMoveRight 
}) => {
    return (
        <MuiCard style={styles.column}>
            <div style={styles.title}>{column.name}</div>
            <br/>
            {column.cards.map((card, cardIndex) => (
                <Card
                    card={card}
                    cardIndex={cardIndex}
                    key={cardIndex}
                    canMoveLeft={columnIndex > 0}
                    canMoveRight={columnIndex < 3}
                    onMoveLeft={() => onMoveLeft(cardIndex)}
                    onMoveRight={() => onMoveRight(cardIndex)}
                />
            ))}
            <br/>
            <Button style={{color:'white'}} onClick={handleAddCard}>+</Button>
        </MuiCard>
    )
}

const styles = {
    column: {
        flexGrow: 1,
        flexShrink: 1,
        margin: 15,
        padding: 15,
        background: blueGrey[800],
        color: 'white',
        textAlign: 'center'
    },
}

export default Column
