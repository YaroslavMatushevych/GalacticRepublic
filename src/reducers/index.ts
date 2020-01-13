// modules
import { Reducer, combineReducers } from 'redux';
// typings
import { AppState } from './typings';
import { items, itemsHasErrored, itemsIsLoading } from './getItems';

// application reducer
export const appReducer = combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
});

// high-level reducer
const rootReducer: Reducer = (state: AppState, action :any) => {
  return appReducer(state, action);
};

export default rootReducer;

