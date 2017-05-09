import { createStore, combineReducers } from 'redux';

import movies from './reducers/movies';
import uInto from  './reducers/uInto'

const reducer = combineReducers({
  movies,
  uInto
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
