import React from 'react'
import Card from '../../../../Card/Card'
const NegPlayerGenerator = require('../../../../Generators/NegCardGenerator');

const NegCard = (props) => {
    return (
        <Card value={NegPlayerGenerator()} />
    )
}

export default NegCard