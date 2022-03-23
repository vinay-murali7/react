import React, { Component } from 'react';
import './App.css';

class ChildComp extends Component {
  constructor() {
    super();
    this.state={
      name: 'Vinay'
    }
    console.log('Child-Comp Constructor');
  }
  
  componentWillMount() {
    console.log('Child-Comp ComponentWillMount');
  }

  componentDidMount() {
    console.log('Child-Comp ComponentDidMount');
  }

  componentWillReceiveProps() {
    console.log('Child ComponentWillReceiveProps');
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log('Child ShouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('Child ComponentWillUpdate');
  }

  componentDidUpdate(prevProps, pevState) {
    console.log('Child ComponentD idUpdate');
  }

  componentWillMount() {
    console.log('Child ComponentWillMount');
  }

  componentWillMount() {
    console.log('Child ComponentWillMount');
  }
  render() {
    console.log('Child-Comp Render');
    return (
      <div className="App">
          
      </div>
    );
  }
}
export default ChildComp;