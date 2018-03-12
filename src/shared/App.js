import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReposList from '../client/components/presentational/ReposList';
import { fetchRepos } from '../client/redux/actions';

class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchRepos());
  }
  render() {
    const { fetching, repos } = this.props;
    return <ReposList fetching={fetching} repos={repos} />;
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
