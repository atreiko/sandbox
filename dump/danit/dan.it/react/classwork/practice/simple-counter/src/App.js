import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 50,
    step: 5
  }

  decrementCounter = () => {
    const { counter, step } = this.state;
    this.setState({ counter: Math.max(counter - step, 0) });
    // this.setState((newState) => ({ counter: Math.max(newState.counter - step, 0) }));
  }

  incrementCounter = () => {
    const { counter, step } = this.state;
    this.setState({ counter: Math.min(counter + step, 100) });
  }

  decrementStep = () => {
    this.setState({ step: Math.max(this.state.step - 1, 1) });
  }

  incrementStep = () => {
    this.setState({ step: Math.min(this.state.step + 1, 10) });
  }

  render() {
    const { counter, step } = this.state;

    return (
      <div className="App">
        <div>
          <button onClick={this.decrementCounter}>-</button>
          <span>{counter}%</span>
          <button onClick={this.incrementCounter}>+</button>
        </div>

        <div>
          <button onClick={this.decrementStep}>-</button>
          <span>{step}</span>
          <button onClick={this.incrementStep}>+</button>
        </div>
      </div>
    );
  }
}

export default App;