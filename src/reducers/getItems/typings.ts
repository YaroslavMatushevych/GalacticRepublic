import { itemsHasErrored, itemsIsLoading, itemsFetchDataSuccess } from '../../actions/starShipsAction';
import { ActionType } from 'typesafe-actions';

export type State = {
  next: string;
  previous: string;
  results: [];
};

export type itemsHasErroredAction = ActionType<typeof itemsHasErrored>;
export type itemsIsLoadingAction = ActionType<typeof itemsIsLoading>;
export type itemsFetchDataSuccessAction = ActionType<typeof itemsFetchDataSuccess>;