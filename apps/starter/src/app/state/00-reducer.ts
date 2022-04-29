import { createReducer } from '@ngrx/store';

const initialState = {
  appName: 'NgRx'
};

export const rootReducer = createReducer(initialState);
