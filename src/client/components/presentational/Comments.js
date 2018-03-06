import React, { Component } from 'react';

const Comments = props => {
  return !!props.comments ? (
    <ul>{props.comments.map(comment => <li key={comment.id}>Comment: {comment.body}</li>)}</ul>
  ) : <span>This didn't work!</span>;
};

export default Comments;
