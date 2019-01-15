import React from 'react';
import Card from '../../../../Card/Card'
const PosPlayerGenerator = require('../../../../Generators/PosCardGenerator');

const PosCard = () => {
    return (
        <Card value={PosPlayerGenerator()} />
    )
}

export default PosCard