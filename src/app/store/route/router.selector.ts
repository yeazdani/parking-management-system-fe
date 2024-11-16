import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RouterStateUrl } from './custom-route-serializer';

export const routerState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const selectCurrentRoute = createSelector(routerState, router => {
  return router?.state;
});
