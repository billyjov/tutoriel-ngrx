import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, of } from 'rxjs';

import { BooksService } from 'src/app/books/services/books.service';
import { Book } from 'src/app/models/books';
import * as BooksActions from '../../actions/books/books.actions';



@Injectable()
export class BookEffects {


  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.loadBooks),
      mergeMap(() => this.booksService.getBooks().pipe(
        map((books: Book[]) => BooksActions.loadBooksSuccess({ books })),
        catchError(error => of(BooksActions.loadBooksFailure({ error: error.body.error })))
      ))
    )
  );

  addBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.addBook),
      mergeMap(({ book }) => this.booksService.addBook(book).pipe(
        map((book: Book) => BooksActions.addBookSuccess({ book })),
        catchError(error => of(BooksActions.addBookFailure({ error: error.body.error })))
      ))
    )
  );

  deleteBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.BooksActionsGroup.deleteBook),
      mergeMap(({ id }) => this.booksService.deleteBook(id).pipe(
        map(() => BooksActions.BooksActionsGroup.deleteBookSuccess({ id })),
        catchError(error => of(BooksActions.BooksActionsGroup.deleteBookFailure({ error: error.body.error })))
      ))
    )
  );

  updateBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.BooksActionsGroup.updateBook),
      mergeMap(({ book }) => this.booksService.updateBook(book).pipe(
        map(() => BooksActions.BooksActionsGroup.updateBookSuccess({ book })),
        catchError(error => of(BooksActions.BooksActionsGroup.updateBookFailure({ error: error.body.error })))
      ))
    )
  );




  constructor(private actions$: Actions, private booksService: BooksService) { }

}
