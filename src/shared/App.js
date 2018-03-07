import React, { Component } from 'react';
import ReposContainer from '../client/components/container/ReposContainer';

const App = props => {
  return <ReposContainer repos={props.state} />;
};

export default App;
