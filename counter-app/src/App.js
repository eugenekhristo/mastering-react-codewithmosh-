import React, { Component } from 'react';
import './App.css';
// components
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 4 }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <Navbar total={this.getTotalOfCounterValues()} />
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onIncrease={this.handleIncrease}
            onDelete={this.handleDeleteCounter}
            onReset={this.handleReset}
           />
        </main>
      </React.Fragment>
    );
  }

  handleIncrease = counter => {
    const counters = this._deepCopy(this.state.counters);
    const foundCounter = counters.find(item => item.id === counter.id);
    foundCounter.value++;
    this.setState({ counters });
  };

  handleDeleteCounter = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );

    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters });
  };

  getTotalOfCounterValues = () =>
    this.state.counters.reduce((sum, item) => (sum += item.value), 0);

  ////////////// PRIVATE METHODS
  /////////////////////////////////////////
  _deepCopy(item) {
    return JSON.parse(JSON.stringify(item));
  }
}

export default App;
