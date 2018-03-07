import React, { Component } from 'react';

const Comments = props => {
  const listStyle = {
    maxWidth: `50%`,
    margin: `24px auto 0px auto`,
    height: `calc(100vh - 108px)`,
    overflowY: `scroll`,
    backgroundColor: `#fff`,
    padding: `4px 24px`,
    borderRadius: `4px`,
    boxShadow: `0px 2px 2px 0px rgba(0, 0, 0, 0.5)`
  };
  const listItemStyle = {
    height: `30px`,
    borderBottom: `1px solid #d1d1d1`,
    marginBottom: `10px`
  };
  return (
    <div style={listStyle}>
      <button onClick={e => props.getComments(e)}>Get Comments</button>
      {!!props.comments ? (
        <ul style={{listStyle: `none`, padding: `0px`}}>
          {props.comments.map(comment => (
            <li key={comment.id} style={listItemStyle}>
              Comment: {comment.name}
            </li>
          ))}
        </ul>
      ) : (
        <span>This didn't work!</span>
      )}
    </div>
  );
};

export default Comments;
