import { createSelector, createFeatureSelector } from '@ngrx/store';
import { RootState, ROOT_FEATURE_KEY, State } from './00-reducer';


// const selectRoot = (state: State) => state.root;
const selectRoot = createFeatureSelector<RootState>(ROOT_FEATURE_KEY);

export const getUser = createSelector(selectRoot, (state: RootState) => state.user);

export const getUsers = createSelector(selectRoot, (state: RootState) => state.users);
export const getIsLoaded = createSelector(selectRoot, (state: RootState) => state.loaded);
export const getError = createSelector(selectRoot, (state: RootState) => state.error);
