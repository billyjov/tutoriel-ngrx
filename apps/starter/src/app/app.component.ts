import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user';

import { State } from './state/00-reducer';
import { initAction, changeUsername } from './state/01-actions';

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
    this.store.dispatch(initAction());

    // this.user = this.store.select((state: any) => state.root.user);
    this.user = this.store.pipe(select((state: State) => state.root.user));
  }

  public changeUsername(): void {
    this.store.dispatch(changeUsername({ username: `Coulisses ${Math.random()}` }));
  }
}
