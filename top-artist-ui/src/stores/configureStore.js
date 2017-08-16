import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';
import rootEpic from '../epics';
import rootReducer from '../reducers';

const reduxRouterMiddleware = routerMiddleware(browserHistory)
const epicMiddleware = createEpicMiddleware(rootEpic);
const createStoreWithMiddleware = applyMiddleware(epicMiddleware, reduxRouterMiddleware, logger)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
