import 'rxjs';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import registerServiceWorker from './registerServiceWorker';

import configureStore from './stores/configureStore';
import App from './components/app';
import Four0Four from './components/four0Four';
import TopArtists from './components/topArtists';
import TopAlbums from './components/topAlbums';

// todo: replace with own css
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';

import './index.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App} >
        <IndexRoute component={TopArtists} />
        <Route path='topartists/:mbid' component={TopAlbums} />
        <Route path='*' component={Four0Four} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
