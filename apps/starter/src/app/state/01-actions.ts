import { HttpErrorResponse } from '@angular/common/http';

import { createAction, props, createActionGroup, emptyProps } from '@ngrx/store';

import { User } from '../models/user';

// export const initAction = createAction('[ROOT] Init app');

// export const changeUsername = createAction('[ROOT] Change username', props<{ username: string }>());
// export const changeIsAdmin = createAction('[ROOT] Change isAdmin', props<{ isAdmin: boolean }>());

export const RootActions = createActionGroup({
  source: 'ROOT',
  events: {
    'Init app': emptyProps(),
    'Change username': props<{ username: string }>(),
    'Change is admin': props<{ isAdmin: boolean }>()
  }
});


export const loadUsers = createAction('[Users API] load users');
export const loadUsersSuccess = createAction(
  '[Users API] load user success',
  props<{ users: User[] }>()
);
export const loadUsersFailure = createAction(
  '[Users API] load user failure',
  props<{ error: HttpErrorResponse | Error | string }>()
);

