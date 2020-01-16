// typings
import { itemsHasErroredAction, itemsIsLoadingAction, itemsFetchDataSuccessAction, State } from './typings';

const initialState: State = {
  next: 'next',
  previous: 'previous',
  results: [],
};

export const itemsHasErrored = (state = false, action: itemsHasErroredAction): boolean => {
  switch (action.type) {
      case 'ITEMS_HAS_ERRORED':
          return action.hasErrored;

      default:
          return state;
  }
}

export const itemsIsLoading = (state = false, action: itemsIsLoadingAction): boolean => {
  switch (action.type) {
      case 'ITEMS_IS_LOADING':
          return action.isLoading;

      default:
          return state;
  }
}

export const items = (state: State = initialState, action: itemsFetchDataSuccessAction) => {
  switch (action.type) {
      case 'ITEMS_FETCH_DATA_SUCCESS':
          return action.items;

      default:
          return state;
  }
}
