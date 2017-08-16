import * as actionTypes from '../constants/actionTypes';

export default function topAlbums(state = {}, action) {
  switch (action.type) {
    case actionTypes.REQUESTED_TOP_ALBUMS:
      return {};
    case actionTypes.RECEIVED_TOP_ALBUMS:
      return action.topAlbums;
    default:
      return state;
  }
}
