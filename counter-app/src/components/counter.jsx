import React, { Component } from 'react';

class Counter extends Component {
  render() {
    const {onIncrease, counter, onDelete} = this.props;

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button 
          className="btn btn-secondary btn-sm"
          onClick={() => onIncrease(counter)}
        >
          Increment
        </button>
        <button 
          className="btn btn-danger btn-sm ml-2"
          onClick={() => onDelete(counter.id)}
        >Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const {value} = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }
}

export default Counter;
