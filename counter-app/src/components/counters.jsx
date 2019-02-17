import React, { Component } from 'react';
// components
import Counter from './counter';
// styles
import './counters.css';

class Counters extends Component {
  render() {
    const { onIncrease, counters, onDelete, onReset, onDecrease } = this.props;

    return (
      <React.Fragment>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        <div className="wrapper">
          {counters.map(counter => (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={onDelete}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
