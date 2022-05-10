import { createAction, props } from '@ngrx/store';

export const initAction = createAction('Init app');

export const changeUsername = createAction('Change username', props<{ username: string }>());
