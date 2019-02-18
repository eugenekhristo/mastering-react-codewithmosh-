import React, { Component } from 'react';

class ProductDetails extends Component {
  handleSave = history => {
    history.replace('/products');
  };

  render() {
    const { match, history } = this.props;

    return (
      <div>
        <h1>Product Details - {match.params.id}</h1>
        <button onClick={() => this.handleSave(history)}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
