import React, { Component, Fragment } from 'react';
import ReposList from '../presentational/ReposList';

class ReposContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }
  componentDidMount() {
    !!this.props.repos &&
      this.setState({
        repos: this.props.repos
      })
  }
  render() {
    return <ReposList repos={this.state.repos} />;
  }
}

export default ReposContainer;
