import React, { Component } from 'react';
import './App.css';

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = { ordered: false };
        this.food = { value: "" };
        this.quantity = { value: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(e) {
        e.preventDefault();
        this.setState({
          ordered: true
        });
      }
  render() {
    let orderForm = (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Food
              <input
                ref={el => (this.food = el)}
                placeholder="What food would you like?"
                name="food"
              />
            </label>
          </div>
          <div>
            <label>
              Quantity
              <select ref={el => (this.quantity = el)} name="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
          </div>
          <input type="submit" value="Place your order" />
        </form>
      );
  
      let orderReceived = (
        <div>
          <h3>Order received!</h3>
          <p>Food: {this.food.value}</p>
          <p>Quantity: {this.quantity.value}</p>
          <p>Coming right up!</p>
        </div>
      );
      let visibleElement = this.state.ordered ? orderReceived : orderForm;
    return (
        <div>
        <h1>What would you like to eat?</h1>
        {visibleElement}
      </div>
    );
  }
}

export default Events;