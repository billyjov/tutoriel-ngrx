import { createSelector, createFeatureSelector } from '@ngrx/store';
import { RootState, ROOT_FEATURE_KEY, State } from './00-reducer';


// const selectRoot = (state: State) => state.root;
const selectRoot = createFeatureSelector<RootState>(ROOT_FEATURE_KEY);

export const getUser = createSelector(selectRoot, (state: RootState) => state.user);
