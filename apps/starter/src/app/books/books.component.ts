import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


import * as BooksActions from './state/actions/books/books.actions';
import { Book } from '../models/books';
import { ErrorType } from '../models/error';
import { getError } from './state/selectors/book/book.selectors';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public books$: Observable<Book[]>;
  public error$: Observable<ErrorType>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(BooksActions.loadBooks());
    this.error$ = this.store.select(getError);
  }

}
