import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import * as fromBook from './state/reducers/book/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './state/effects/book/book.effects';
import { BooksComponent } from './books.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    BooksComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBook.booksFeatureKey, fromBook.reducer),
    EffectsModule.forFeature([BookEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: BooksComponent
      }
    ]),
    ReactiveFormsModule
  ]
})
export class BooksModule { }
