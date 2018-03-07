import React, { Component, Fragment } from 'react';
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
    return fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then(response => response.json())
      .then(json => this.setState({ comments: json }));
  };
  render() {
    return <Comments getComments={this.getComments} comments={this.state.comments} />;
  }
}

export default CommentsContainer;
