import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user';

import { State } from './state/00-reducer';
// import { initAction, changeUsername, changeIsAdmin } from './state/01-actions';

import { loadUsers, RootActions } from './state/01-actions';
// import * as RootActions from './state/01-actions';

import { getError, getIsLoaded, getUser, getUsers } from './state/02-selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'starter';
  public user: Observable<User> = {} as Observable<User>;
  public users$!: Observable<User[]>;
  public isLoaded$: Observable<boolean>;
  public errorMsg$: Observable<HttpErrorResponse | Error |string>;

  constructor(private store: Store<State>, private http: HttpClient) { }


  ngOnInit(): void {
    // this.store.dispatch(RootActions.initAction());
    this.store.dispatch(RootActions.initApp());

    // this.user = this.store.select((state: any) => state.root.user);
    // this.user = this.store.pipe(select((state: State) => state.root.user));
    this.user = this.store.pipe(select(getUser));
    this.users$ = this.store.pipe(select(getUsers));
    this.isLoaded$ = this.store.pipe(select(getIsLoaded));
    this.errorMsg$ = this.store.pipe(select(getError));
  }

  public changeUsername(): void {
    this.store.dispatch(RootActions.changeUsername({ username: `Coulisses ${Math.random()}` }));
    this.store.dispatch(RootActions.changeIsAdmin({ isAdmin: false }));
    // this.store.dispatch(RootActions.changeUsername({ username: `Coulisses ${Math.random()}` }));
    // this.store.dispatch(RootActions.changeIsAdmin({ isAdmin: false }));
  }

  public loadUsers(): void {
    this.store.dispatch(loadUsers());
  }
}
