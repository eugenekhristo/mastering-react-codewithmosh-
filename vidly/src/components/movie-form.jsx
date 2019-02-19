import React, { Component } from 'react';

class MovieForm extends Component {
  redirectTo = path => {
    const { history } = this.props;
    history.replace(path);
  };

  render() {
    const { match } = this.props;

    return (
      <div>
        <h1>Movie Form - {match.params.id} </h1>
        <button
          className="btn btn-primary"
          onClick={() => this.redirectTo('/movies')}
        >
          Save
        </button>
      </div>
    );
  }
}

export default MovieForm;
