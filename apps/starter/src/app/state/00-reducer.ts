import { ActionReducer, createReducer, MetaReducer, on } from '@ngrx/store';

import { initAction } from './01-actions';

const initialState = {
  appName: 'NgRx'
};

function log(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    const currentState = reducer(state, action);


    console.log('Etat precedent: ', state);
    console.log('Action: ', action);
    console.log('Etat suivant: ', currentState);

    return currentState;
  }
}

export const metaReducers: MetaReducer[] = [log];

export const rootReducer = createReducer(initialState,

  on(initAction, (state) => {

    return {
      ...state,
      isAdmin: true
    }
  })
);
