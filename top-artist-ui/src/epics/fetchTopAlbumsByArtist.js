import { Observable } from 'rxjs/Observable';
import { replace, go } from 'react-router-redux';
import { ajax } from 'rxjs/observable/dom/ajax';
import * as actionTypes from '../constants/actionTypes';
import * as config from '../constants/config';
import { receiveArtistsTopAlbums } from '../actions';

export default function fetchTopAlbumsByArtist(action$) {
  return action$.ofType(actionTypes.REQUESTED_TOP_ALBUMS)
  .map(action => action.query)
  .switchMap(query => {
     const {page = 1, mbid} = query;
     return Observable.merge(
       Observable.of(replace(`/topartists/${mbid}?page=${page}`)),
       ajax.getJSON(`/api/topartists/${mbid}?page=${page}&limit=${config.ITEMS_PER_PAGE}`)
       .map(receiveArtistsTopAlbums)
       .catch(error => Observable.of(go(-1)))
     )
  });
}
