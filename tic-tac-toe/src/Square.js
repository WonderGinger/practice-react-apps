import React from 'react'

const Square = ({ value, index, onClick }) => {
    return (
        <div onClick={onClick} style={styles.square}>
            {value}
        </div>
    )
}

const styles = {
    square: {
        border: "1px solid black",
        width: 100,
        height: 100,
        fontSize: 40,
        textAlign: 'center',
    }
}

export default Square
