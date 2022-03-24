import React, { Component } from 'react';
// import ChildComp from './childComponent';
// import Events from './events';
import RefExample from './RefExample';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Vinay'
    }
    console.log('constructor');
  }

  componentWillMount() {
    console.log('ComponentWillMount');
  }

  componentDidMount() {
    console.log('ComponentDidMount');
  }

  componentWillReceiveProps() {
    console.log('ComponentWillReceiveProps');
  }
  
  shouldComponentUpdate(nextProp, nextState) {
    console.log('ShouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, pevState) {
    console.log('Child ComponentD idUpdate');
  }
  componentWillMount() {
    console.log('ComponentWillMount');
  }

  componentWillMount() {
    console.log('ComponentWillMount');
  }
  handleChange(){
   this.setState({name: 'Vidya'});
  };

  render() {
    console.log('Render');
    return (
      <div className="App">
        {/* {this.state.name} */}
        {/* <ChildComp name={this.state.name}/> */}
        {/* <Events />
        <button onClick={this.handleChange.bind(this)}>
          Updated State
        </button> */}
        <RefExample />
      </div>
    );
  }
}
export default App;