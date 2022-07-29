import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { metaReducers, rootReducer, ROOT_FEATURE_KEY } from './state/00-reducer';
import { environment } from '../environments/environment';
import { AppEffects } from './state/04-effects';
import { UsersData } from './api/users.data';
import { BooksModule } from './books/books.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      [ROOT_FEATURE_KEY]: rootReducer
    }, {
      metaReducers,
      runtimeChecks: {
        strictActionTypeUniqueness: true,
        strictActionImmutability: true,
        strictStateImmutability: true,
      }
    }),
    StoreDevtoolsModule.instrument({
      name: 'Ngrx Starter Kit Coulisses Learn',
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([AppEffects]),
    InMemoryWebApiModule.forRoot(UsersData),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
