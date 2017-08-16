import * as actionTypes from '../constants/actionTypes';

export default function searchInFlight(state = false, action) {
  switch (action.type) {
    case actionTypes.SEARCHED_TOP_ARTISTS:
      return true;
    case actionTypes.RECEIVED_TOP_ARTISTS:
    case actionTypes.CLEARED_SEARCH_RESULTS:
      return false;
    default:
      return state;
  }
}
