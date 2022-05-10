import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { initAction, changeUsername } from './state/01-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'starter';
  public user: Observable<any> = {} as Observable<any>;

  constructor(private store: Store) { }


  ngOnInit(): void {
    this.store.dispatch(initAction());

    this.user = this.store.select((state: any) => state.root.user);
  }

  public changeUsername(): void {
    this.store.dispatch(changeUsername({ username: `Coulisses ${Math.random()}` }));
  }
}
