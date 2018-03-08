import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReposContainer from '../client/components/container/ReposContainer';
import { fetchRepos } from '../client/redux/actions';

// const App = props => {
//   return <ReposContainer repos={props.state} />;
// };
class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchRepos());
  }
  render() {
    const { repos } = this.props;
    console.log(repos);
    return <ReposContainer repos={this.props.repos} />;
  }
}

function mapStateToProps(state) {
  const { rootReducer } = state;
  const { fetching, repos } = rootReducer;
  return {
    fetching,
    repos
  }
}

export default connect(mapStateToProps)(App);
// export default App;
