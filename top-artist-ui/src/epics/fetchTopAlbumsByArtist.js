import { ajax } from 'rxjs/observable/dom/ajax';
import * as actionTypes from '../constants/actionTypes';
import * as config from '../constants/config';
import { receiveArtistsTopAlbums } from '../actions';

export default function fetchTopAlbumsByArtist(action$) {
  return action$.ofType(constObj.SEARCHED_TOP_ALBUMS)
  .map(action => action.query)
  .switchMap(query => {
    const {page = 1, mbid} = query;
    return ajax.getJSON(`/topartists/${mbid}?page=${page}&limit=${config.ITEMS_PER_PAGE}`)
    .map(receiveArtistsTopAlbums)
  });
}
