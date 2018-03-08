import { fetchPopularRepos } from '../../shared/api';

export const FETCH_REPOS = 'FETCH_REPOS';
export function fetchRepos() {
  return function(dispatch) {
    dispatch(fetching(true))
    dispatch(getData())
  }
}

export const FETCHING = 'FETCHING';
function fetching(fetching) {
  return {
    type: FETCHING,
    fetching: fetching
  }
}

export const GET_DATA = 'GET_DATA';
function getData() {
  return function(dispatch) {
    fetchPopularRepos().then(data => dispatch(resSuccess(data)))
    dispatch(fetching(false))
  }
}

export const RES_SUCCESS = 'RES_SUCCESS';
function resSuccess(data) {
  return {
    type: RES_SUCCESS,
    repos: data
  }
}
