import { StateType } from 'typesafe-actions';
import { RouterState } from 'connected-react-router';
import { appReducer } from './index';

export type AppState = StateType<typeof appReducer> & { router: RouterState };
