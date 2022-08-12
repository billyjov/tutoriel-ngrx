import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './state/reducers/book/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './state/effects/book/book.effects';
import { BooksComponent } from './books.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BooksComponent
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
    ])
  ]
})
export class BooksModule { }
