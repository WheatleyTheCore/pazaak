import React from 'react'
import './SelectorCard.css'

class SelectorCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false}
    }

    componentDidUpdate() {
        this.props.recieveData(this.getData());
    }

    getData() {
        return(this.props.value + ":" + this.state.clicked);
    }

    render() {
        return (
            <div className={this.state.clicked ? "SelectorCardClicked" : "SelectorCard"} onClick={() =>{
                    this.setState({clicked: !this.state.clicked});
                }}>
                <div className="inner-SelectorCard">
                    <div className="text">
                        <h1>{this.props.value}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectorCard