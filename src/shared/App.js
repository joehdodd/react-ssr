import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReposContainer from '../client/components/container/ReposContainer';
import { fetchRepos } from '../client/redux/actions';

class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchRepos());
  }
  render() {
    const { fetching, repos } = this.props;
    return <ReposContainer fetching={fetching} repos={repos} />;
  }
}

const mapStateToProps = state => {
  const { rootReducer } = state;
  const { fetching, repos } = rootReducer;
  return {
    fetching,
    repos
  }
}

export default connect(mapStateToProps)(App);
