import { createAction, props } from '@ngrx/store';

export const loadBooks = createAction(
  '[Books] Load Books'
);

export const loadBooksSuccess = createAction(
  '[Books] Load Bookss Success',
  props<{ data: any }>()
);

export const loadBooksFailure = createAction(
  '[Books] Load Books Failure',
  props<{ error: any }>()
);
