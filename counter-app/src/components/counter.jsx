import React, { Component } from 'react';


class Counter extends Component {
  render() {
    const { onIncrease, counter, onDelete, onDecrease } = this.props;

    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <div className="buttons">
          <button
            className="btn btn-secondary btn-sm m-1"
            onClick={() => onIncrease(counter)}
          >
            +
          </button>
          <button 
            className="btn btn-secondary btn-sm m-1"
            onClick={() => onDecrease(counter.id)}
            disabled={counter.value === 0}
          > 
            -
          </button>
          <button
            className="btn btn-danger btn-sm m-1"
            onClick={() => onDelete(counter.id)}
          >
            x
          </button>
        </div>
      </React.Fragment>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }
}

export default Counter;
