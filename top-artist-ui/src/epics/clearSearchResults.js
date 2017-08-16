import * actionTypes from '../constants/actionTypes';
import { clearSearchResults } from '../actions';

export default action$ =>
  action$.ofType(ActionTypes.SEARCHED_TOP_ARTISTS)
    .filter(action => (!!!action.query || !action.query.country || !action.query.country.length))
    .map(clearSearchResults);
