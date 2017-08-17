import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import topAlbums from './topAlbums'
import searchInFlight from './searchInFlight';
import topArtists from './topArtists';

export default combineReducers({
  topAlbums,
  searchInFlight,
  topArtists,
  routing: routerReducer
});
