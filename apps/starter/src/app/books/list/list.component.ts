import { Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book } from 'src/app/models/books';
import { getBooks } from '../state/selectors/book/book.selectors';
import { BooksActionsGroup } from '../state/actions/books/books.actions';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  public bookForm: FormGroup;

  public books$: Observable<Book[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.books$ = this.store.select(getBooks);
  }

  public deleteBook(id: number): void {
    this.store.dispatch(BooksActionsGroup.deleteBook({ id }));
  }

  public editBook(book: Book): void {
    console.log(book);
    this.bookForm.patchValue({
      id: book.id,
      name: book.name,
      publisher: book.publisher,
      author: book.author
    });
  }
}
