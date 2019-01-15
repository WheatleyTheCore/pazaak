import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div className="card">
            <div className="inner-card">
                <div className="text">
                    <h1>{props.value}</h1>
                </div>
            </div>
        </div>
    )
}

export default Card