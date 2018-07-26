import React from 'react';
// import { Link } from 'react-router-dom'

const Card = (props) => {

    const style = {
        background: 'lightgrey' 
    }

    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

export default Card;