import { createAction, props } from '@ngrx/store';

export const initAction = createAction('Init app');

export const changeUsername = createAction('[ROOT] Change username', props<{ username: string }>());
export const changeIsAdmin = createAction('[ROOT] Change isAdmin', props<{ isAdmin: boolean }>());
