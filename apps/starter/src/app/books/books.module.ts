import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './state';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBook.bookFeatureKey, fromBook.reducers, { metaReducers: fromBook.metaReducers })
  ]
})
export class BooksModule { }
