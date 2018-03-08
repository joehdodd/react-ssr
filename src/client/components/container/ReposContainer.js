import React, { Component, Fragment } from 'react';
import ReposList from '../presentational/ReposList';

class ReposContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     repos: []
  //   };
  // }
  // componentWillMount() {
  //   !!this.props.repos &&
  //     this.setState({
  //       repos: this.props.repos
  //     })
  // }
  render() {
    return (
      <Fragment>
        {this.props.fetching ? (
          <span>Fetching repos!</span>
        ) : (
          <ReposList fetching={this.props.fetching} repos={this.props.repos} />
        )}
      </Fragment>
    );
  }
}

export default ReposContainer;
