import React, { Component } from 'react';

const ReposList = props => {
  const containerStyle = {
    maxWidth: `85%`,
    margin: `24px auto 0px auto`,
    height: `calc(100vh - 108px)`,
    overflowY: `scroll`,
    backgroundColor: `#fff`,
    padding: `4px 24px`,
    borderRadius: `4px`,
    boxShadow: `0px 2px 2px 0px rgba(0, 0, 0, 0.5)`
  };
  const gridStyle = {
    display: `grid`,
    gridTemplateColumns: `repeat(4, 1fr)`,
    gridGap: `20px`,
    width: `100%`,
    height: `100%`
  };
  const gridItemStyle = {
    display: `grid`,
    gridAutoFlow: `row`,
    gridGap: `2.5px`,
    alignItems: `center`,
    borderBottom: `1px solid #d1d1d1`,
  };
  return (
    <div style={containerStyle}>
      {!!props.repos ? (
        <div style={gridStyle}>
          {props.repos.map(repo => (
            <div style={gridItemStyle} key={repo.id}>
              <span>{repo.name}</span>
              <span>{repo.language}</span>
            </div>
          ))}
        </div>
      ) : (
        <span>Loading repos!</span>
      )}
    </div>
  );
};

export default ReposList;
