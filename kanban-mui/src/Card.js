import React from 'react'
import MuiCard from '@material-ui/core/Card'
import { Button } from '@material-ui/core'
import { grey } from '@material-ui/core/colors';
import { wrap } from 'module';


const Card = ({ 
    card, 
    cardIndex, 
    canMoveLeft, 
    canMoveRight, 
    onMoveLeft, 
    onMoveRight 
}) => {
    return (
        <MuiCard style={styles.card}>
            {canMoveLeft && <Button style={styles.button} onClick={onMoveLeft}>{'<'}</Button>}
            <span style={styles.card.span}>{card}</span>
            {canMoveRight && <Button style={styles.button} onClick={onMoveRight}>{'>'}</Button>}

        </MuiCard>
    )
}

const styles = {
    card: {
        background: grey[700],
        color: "white",
        padding: 15,
        flexGrow: 1,
        display: 'flex',
        flexWrap: wrap,
        span: {
            margin: 'auto',
            flexGrow: 1,
            textAlign: 'center',
            color: 'white',
        },
    },
    button: {
        flexGrow: 1,
        color: 'white',
    }
}

export default Card
