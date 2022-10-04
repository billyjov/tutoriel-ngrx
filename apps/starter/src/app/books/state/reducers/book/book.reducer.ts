import { createReducer, on } from '@ngrx/store';
import { Book } from 'src/app/models/books';
import { ErrorType } from 'src/app/models/error';

import * as BooksActions from '../../actions/books/books.actions';

export const booksFeatureKey = 'books';

export interface BooksState {
  books: Book[];
  selectedBook: Book | null;
  error: ErrorType;
}

export interface State {
  readonly [booksFeatureKey]: BooksState
}

export const initialState: BooksState = {
  books: [],
  selectedBook: null,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(BooksActions.loadBooksSuccess, (state, { books }) => {
    return {
      ...state,
      books
    }
  }),
  on(BooksActions.addBook, (state) => {
    return {
      ...state
    }
  }),
  on(BooksActions.addBookSuccess, (state, { book }) => {
    return {
      ...state,
      books: [...state.books, book]
    }
  }),
  on(BooksActions.addBookFailure, (state, { error }) => {
    return {
      ...state,
      error: error
    }
  }),
  on(BooksActions.BooksActionsGroup.deleteBookSuccess, (state, { id }) => {
    return {
      ...state,
      books: state.books.filter((book: Book) => book.id !== id)
    }
  }),
  on(BooksActions.BooksActionsGroup.deleteBookFailure, (state, { error }) => {
    return {
      ...state,
      error: error
    }
  }),
  on(BooksActions.BooksActionsGroup.updateBookSuccess, (state, { book }) => {
    const updatedBooks: Book[] = state.books.map((existingBook: Book) =>
      existingBook.id === book.id ? book : existingBook
    );

    return {
      ...state,
      books: updatedBooks
    }
  }),
  on(BooksActions.BooksActionsGroup.updateBookFailure, (state, { error }) => {
    return {
      ...state,
      error
    }
  })

);
