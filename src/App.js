import React, { Component } from 'react';
import './App.css';
import CardSelection from './Components/Decks/Side/CardSelection/CardSelection'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardSelection />
      </div>
    );
  }
}

export default App;
