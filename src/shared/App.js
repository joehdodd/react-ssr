import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReposContainer from '../client/components/container/ReposContainer';

// const App = props => {
//   return <ReposContainer repos={props.state} />;
// };
class App extends Component {
  componentDidMount() {
    // fetch repos
  }
  render() {
    return <ReposContainer repos={this.props.state} />;
  }
}

function mapStateToProps(state) {
  const { rootReducer } = state;
  console.log(state);
  return {
    rootReducer
  }
}

export default connect(mapStateToProps)(App);
// export default App;
