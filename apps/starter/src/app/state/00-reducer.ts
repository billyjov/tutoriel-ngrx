import { ActionReducer, createReducer, MetaReducer, on } from '@ngrx/store';
import { User } from '../models/user';

import { changeUsername, initAction } from './01-actions';

export interface State {
  root: {
    appName: string;
    user: User
  }
}

const initialState = {
  appName: 'NgRx',
  user: {
    isAdmin: false
  }
};

function log(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const currentState = reducer(state, action);

    console.groupCollapsed(action.type)
    console.log('Etat precedent: ', state);
    console.log('Action: ', action);
    console.log('Etat suivant: ', currentState);
    console.groupEnd()

    return currentState;
  }
}

export const metaReducers: MetaReducer[] = [log];

export const rootReducer = createReducer(initialState,

  on(initAction, (state) => {

    return {
      ...state,
      user: {
        ...state.user,
        isAdmin: true
      }
    }
  }),
  on(changeUsername, (state, props) => {

    return {
      ...state,
      user: {
        ...state.user,
        username: props.username
      }
    };
  })
);
