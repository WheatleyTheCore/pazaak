import React from 'react'

import SelectorCard from '../../../SelectorCard/SelectorCard'

class CardSelection extends React.Component {
    constructor(props) {
        super(props);
        this.SelectedDeck = {
            "1": false,
            "2": false,
            "3": false,
            "4": false,
            "5": false,
            "6": false,
            "-1": false,
            "-2": false,
            "-3": false,
            "-4": false,
            "-5": false,
            "-6": false
        };
    }

    recieveData = (data) => {
        var recieved = data.split(":");
        this.SelectedDeck[recieved[0]] = (recieved[1] === "true");
        console.log(this.SelectedDeck); 
    }

    componentDidUpdate() {
        console.log(this.SelectedDeck)
    }

    render() {
        return (
            <div>
                <SelectorCard value="1" recieveData={this.recieveData}/>
                <SelectorCard value="2" recieveData={this.recieveData}/>
                <SelectorCard value="3" recieveData={this.recieveData}/>
                <SelectorCard value="4" recieveData={this.recieveData}/>
                <SelectorCard value="5" recieveData={this.recieveData}/>
                <SelectorCard value="6" recieveData={this.recieveData}/>
                <SelectorCard value="-1" recieveData={this.recieveData}/>
                <SelectorCard value="-2" recieveData={this.recieveData}/>
                <SelectorCard value="-3" recieveData={this.recieveData}/>
                <SelectorCard value="-4" recieveData={this.recieveData}/>
                <SelectorCard value="-5" recieveData={this.recieveData}/>
                <SelectorCard value="-6" recieveData={this.recieveData}/>
            </div>
        )
    }
}

export default CardSelection