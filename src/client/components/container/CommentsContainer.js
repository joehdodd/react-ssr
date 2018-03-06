import React, { Component } from 'react';
import Comments from '../presentational/Comments';

class CommentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }
  getComments = e => {
    e.preventDefault();
    console.log('fire?');
    return fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ comments: json });
      });
  };
  render() {
    return (
      <span>
        <button onClick={e => this.getComments(e)}>Get Comments</button>
        <Comments comments={this.state.comments} />
      </span>
    );
  }
}

export default CommentsContainer;
