import { createFeatureSelector, createSelector } from '@ngrx/store';
import { booksFeatureKey, BooksState } from '../../reducers/book/book.reducer';

const selectBooksFeature = createFeatureSelector<BooksState>(booksFeatureKey);

export const getBooks = createSelector(selectBooksFeature, (state: BooksState) => state.books);
