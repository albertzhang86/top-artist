import * as actionTypes from '../constants/actionTypes';
import { clearSearchResults } from '../actions';

export default action$ =>
  action$.ofType(actionTypes.SEARCHED_TOP_ARTISTS)
    .filter(action => (!!!action.query || !action.query.country || !action.query.country.length))
    .map(clearSearchResults);
