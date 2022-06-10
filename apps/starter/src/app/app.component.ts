import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user';

import { State } from './state/00-reducer';
// import { initAction, changeUsername, changeIsAdmin } from './state/01-actions';

import { RootActions } from './state/01-actions';
// import * as RootActions from './state/01-actions';

import { getUser } from './state/02-selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'starter';
  public user: Observable<User> = {} as Observable<User>;

  constructor(private store: Store<State>) { }


  ngOnInit(): void {
    // this.store.dispatch(RootActions.initAction());
    this.store.dispatch(RootActions.initApp());

    // this.user = this.store.select((state: any) => state.root.user);
    // this.user = this.store.pipe(select((state: State) => state.root.user));
    this.user = this.store.pipe(select(getUser));
  }

  public changeUsername(): void {
    this.store.dispatch(RootActions.changeUsername({ username: `Coulisses ${Math.random()}` }));
    this.store.dispatch(RootActions.changeIsAdmin({ isAdmin: false }));
    // this.store.dispatch(RootActions.changeUsername({ username: `Coulisses ${Math.random()}` }));
    // this.store.dispatch(RootActions.changeIsAdmin({ isAdmin: false }));
  }
}
