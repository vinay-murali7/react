import React, { Component } from 'react';
import './App.css';

class Events extends Component {
    constructor() {
        super();
        this.state = {
          name: 'Vinay'
        }
      }

  changeName = (newName) => {
    this.setState({
      name: newName
    })
  }

  changeNameFromInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
      <input type="text" onChange={this.changeNameFromInput} value={this.state.name}/>
      <br/>
      <button onClick={() => this.changeName('Vidya ')}>Change M1</button>
      <br/>
      <button onClick={this.changeName.bind(this, 'Ram')}>Change M2</button>
        <div>{this.state.name}</div>
      </div>
    );
  }
}

export default Events;