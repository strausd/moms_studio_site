import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { siteData } from '../reducers/baseReducer';

export default () => {
  const store = createStore(
    siteData,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
  return store;
}