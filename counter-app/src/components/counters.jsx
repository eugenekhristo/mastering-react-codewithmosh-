import React, { Component } from 'react';
// components
import Counter from './counter';

class Counters extends Component {
  render() {
    const {onIncrease, counters, onDelete, onReset} = this.props;

    return (
      <React.Fragment>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={onReset}
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrease={onIncrease}
          />
        ))}
      </React.Fragment>
    );
  }


}

export default Counters;
