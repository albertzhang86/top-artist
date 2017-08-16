import { combineEpics } from 'redux-observable';
import searchTopArtists from './searchTopArtists';
import clearSearchResults from './clearSearchResults';
import fetchTopAlbumsByArtist from './fetchTopAlbumsByArtist';

export default combineEpics(
  searchTopArtists,
  clearSearchResults,
  fetchTopAlbumsByArtist
);
