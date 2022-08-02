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

  constructor(private actions$: Actions, private booksService: BooksService) { }

}
