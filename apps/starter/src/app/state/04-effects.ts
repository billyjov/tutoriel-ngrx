import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { tap, mergeMap, map } from 'rxjs';
import { User } from '../models/user';
import { UsersService } from '../services/users/users.service';

import * as UsersActions from '../state/01-actions';

@Injectable()
export class AppEffects {

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      tap((val) => console.log('actions: ', val)),
      ofType(UsersActions.loadUsers),
      mergeMap(action => this.usersService.getUsers().pipe(
        map((users: User[]) => UsersActions.loadUsersSuccess({ users }))
      ))
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService) { }

}
