// redux
import {
  Middleware,
  Reducer,
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';
// typings
import { AppState } from '../reducers/typings';
// reducers
import rootReducer from '../reducers';

const middlewares: Middleware[] = [thunk];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const storeCreator = (
  reducers: Reducer<AppState>,
  _middlewares: Middleware[] = middlewares,
) => createStore(reducers, composeEnhancers(applyMiddleware(..._middlewares)));

// store creator
export default storeCreator(rootReducer);