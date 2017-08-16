import * as actionTypes from '../constants/actionTypes';

export default function topArtists(state = {}, action) {
  switch (action.type) {
    case actionTypes.RECEIVED_TOP_ARTISTS:
      return action.topArtists;
    case actionTypes.CLEARED_SEARCH_RESULTS:
      return {};
    default:
      return state;
  }
}
