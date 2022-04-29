import { ActionReducer, createReducer, MetaReducer } from '@ngrx/store';

const initialState = {
  appName: 'NgRx'
};

function log(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    const currentState = reducer(state, action);


    console.log('Etat precedent: ', state);
    console.log('Etat suivant: ', currentState);

    return currentState;
  }
}

export const metaReducers: MetaReducer[] = [log];

export const rootReducer = createReducer(initialState);
