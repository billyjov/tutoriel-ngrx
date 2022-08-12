import { Action, createReducer, on } from '@ngrx/store';
import { Book } from 'src/app/models/books';

import * as BooksActions from '../../actions/books/books.actions';

export const booksFeatureKey = 'books';

export interface BooksState {
  books: Book[];
  selectedBook: Book | null;
}

export interface State {
  readonly [booksFeatureKey]: BooksState
}

export const initialState: BooksState = {
  books: [],
  selectedBook: null
};

export const reducer = createReducer(
  initialState,
  on(BooksActions.loadBooksSuccess, (state, { books }) => {
    return {
      ...state,
      books
    }
  })

);
