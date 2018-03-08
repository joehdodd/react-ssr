import { FETCH_REPOS, FETCHING, GET_DATA, RES_SUCCESS } from './actions';

export function rootReducer(state = {
  fetching: true,
  repos: []
}, action) {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: action.fetching }
    case RES_SUCCESS:
      return { ...state, repos: action.repos }
    default:
      return state;
  }
}
