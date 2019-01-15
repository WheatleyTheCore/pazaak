import React from 'react'

import SelectorCard from '../../../SelectorCard/SelectorCard'

class CardSelection extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        console.log(this.SelectedDeck)
    }
    render() {
        return (
            <div>
                <SelectorCard value="1" />
                <SelectorCard value="2" />
                <SelectorCard value="3" />
                <SelectorCard value="4" />
                <SelectorCard value="5" />
                <SelectorCard value="6" />
                <SelectorCard value="-1" />
                <SelectorCard value="-2" />
                <SelectorCard value="-3" />
                <SelectorCard value="-4" />
                <SelectorCard value="-5" />
                <SelectorCard value="-6" />
            </div>
        )
    }
}

export default CardSelection