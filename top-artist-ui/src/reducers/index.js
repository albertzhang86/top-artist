import { combineEpics } from 'redux-observable';
import { routerReducer } from 'react-router-redux';

import topAlbums from './topAlbums'
import clearSearchResults from './clearSearchResults';
import topArtists from './topArtists';

export default combineEpics(
  topAlbums,
  clearSearchResults,
  topArtists,
  routing: routerReducer
);
