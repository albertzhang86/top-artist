import { Observable } from 'rxjs/Observable';
import { replace } from 'react-router-redux';
import * as actionTypes from '../constants/actionTypes';
import * as config from '../constants/config';
import { receiveArtists } from '../actions';
import { ajax } from 'rxjs/observable/dom/ajax';

export default function searchTopArtists(action$) {
  return action$.ofType(actionTypes.SEARCHED_TOP_ARTISTS)
  .map(action => action.query)
  .filter(query => !!query)
  .switchMap(query =>
    Observable.timer(config.SEARCH_DEBOUNCE)
    .takeUntil(action$.ofType(actionTypes.CLEARED_SEARCH_RESULTS))
    .mergeMap(() => {
      const {page = 1, country} = query;
      return Observable.merge(
        Observable.of(replace(`?country=${country}&page=${page}`)),
        ajax.getJSON(`/topartists?country=${country}&limit=${config.ITEMS_PER_PAGE}&page=${page}`)
        .map(receiveArtists)
      )})
    );
  };
