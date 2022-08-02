import { Action, createReducer, on } from '@ngrx/store';

import * as BooksActions from '../../actions/books/books.actions';

export const bookFeatureKey = 'book';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(BooksActions.loadBooksSuccess, (state, { books }) => {
    console.log('test');
    return {
      ...state,
      books
    }
  })

);
