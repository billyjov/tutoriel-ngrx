import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ofType } from '@ngrx/effects';
import { Store, ActionsSubject } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { addBook, addBookSuccess } from '../state/actions/books/books.actions';
import { BooksActionsGroup } from '../state/actions/books/books.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {


  public booksForm: FormGroup;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private actionsSubject: ActionsSubject
  ) { }

  ngOnInit(): void {
    this.booksForm = this.fb.group({
      id: [''],
      name: [''],
      publisher: [''],
      author: ['']
    });

    this.subscriptions.add(this.actionsSubject
      .pipe(
        ofType(
          BooksActionsGroup.updateBookSuccess,
          addBookSuccess
        )
      )
      .subscribe(() => this.booksForm.reset()));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public onSubmit(): void {
    console.log('form: ', this.booksForm.value);
    const id = this.booksForm.value.id;

    if (this.isIdExist(id)) {
      this.store.dispatch(BooksActionsGroup.updateBook({
        book: this.booksForm.value
      }));
    } else {
      this.store.dispatch(addBook({ book: this.booksForm.value }))
    }
  }

  private isIdExist(id: any): boolean {
    return id !== null && id !== undefined && id !== '';
  }
}
