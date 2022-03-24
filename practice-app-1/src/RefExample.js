import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pin: "",
          error: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addFocus = this.addFocus.bind(this);
      }

      addFocus() {
        this.input.focus();
      }
    
      handleSubmit(e) {
        e.preventDefault();
        if (this.state.pin === "1234") {
          alert("Thanks for the pin!");
          this.setState({ pin: "" });
        } else {
          this.setState({ pin: "", error: true });
          this.addFocus();
        }
      }
    
      handleChange(e) {
        this.setState({ pin: e.target.value, error: false });
      }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label>Enter your pin:</label>
        <input
          type="text"
          value={this.state.pin}
          onChange={this.handleChange}
          ref={el => (this.input = el)}
        />
        <button type="submit">Enter</button>
        {this.state.error}
      </form>
    );
  }
}
export default App;