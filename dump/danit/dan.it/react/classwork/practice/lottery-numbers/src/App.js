import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Numbers from './components/Numbers/Numbers';

// const LIMIT = 36;
const LIMIT = 5;

class App extends Component {
  state = {
    numbers: []
  }

  generateNumber = () => {
    const { numbers } = this.state;
    let random;

    if (numbers.length >= LIMIT) {
      return;
    }

    do {
      random = Math.ceil(Math.random() * LIMIT);
      console.log('Generating random number', random)
    } while (numbers.includes(random))
    
    this.setState({ numbers: [...numbers, random]})
  }

  deleteNumber = (number) => {
    const { numbers } = this.state;
    this.setState({numbers: numbers.filter(i => i !== number)})
  }

  render() {
    const { numbers } = this.state;

    return (
      <div className="App">
        <Button title='Generate' onClick={this.generateNumber} disabled={numbers.length >= LIMIT} />
        <Numbers numbers={numbers} deleteNumber={this.deleteNumber} />
      </div>
    );
  }
}

export default App;
