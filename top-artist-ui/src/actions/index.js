import * as actionTypes from '../constants/actionTypes';

export function searchTopArtists(query) {
  return {
    type: actionTypes.SEARCHED_TOP_ARTISTS,
    query
  };
}

export function receiveArtists(response) {
  return {
    type: actionTypes.RECEIVED_TOP_ARTISTS,
    topArtists: response.topartists
  };
}

export function clearSearchResults() {
  return {
    type: actionTypes.CLEARED_SEARCH_RESULTS
  };
}

export function requestTopAlbumByArtist(query) {
  return {
    type: actionTypes.SEARCHED_TOP_ALBUMS,
    query
  };
}

export function receiveArtistsTopAlbums(response) {
  return {
    type: actionTypes.RECEIVED_TOP_ALBUMS,
    topAlbums: response.topalbums
  };
}
