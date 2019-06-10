import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick }) => {
    const generateSquare = index => {
        return (
            <Square 
                value={squares[index]}
                index={index}
                onClick={() => onClick(index)}
            />
        )
    }
    return (
        <div>
            <div style={styles.row}>
                {generateSquare(0)}
                {generateSquare(1)}
                {generateSquare(2)}
            </div>
            <div style={styles.row}>
                {generateSquare(3)}
                {generateSquare(4)}
                {generateSquare(5)}
            </div>
            <div style={styles.row}>
                {generateSquare(6)}
                {generateSquare(7)}
                {generateSquare(8)}
            </div>
        </div>
    )
}

const styles = {
    row: {
      display: 'flex',
    }
  }


export default Board

