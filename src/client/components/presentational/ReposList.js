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
    borderRadius: `4px`,
    padding: `10px`
  };
  return (
    <div style={containerStyle}>
      {!!props.repos ? (
        <div style={gridStyle}>
          {props.repos.map(
            ({ id, name, language, stargazers_count, html_url }) => (
              <div style={gridItemStyle} key={id}>
                <span>
                  <a href={html_url}>{name}</a>
                </span>
                <span>{stargazers_count}</span>
              </div>
            )
          )}
        </div>
      ) : (
        <span>Loading repos!</span>
      )}
    </div>
  );
};

export default ReposList;
