import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, vehicleFeatureKey } from './vehicle.reducer';

export const selectVehicleState = createFeatureSelector<State>(vehicleFeatureKey);

export const selectVehicles = createSelector(selectVehicleState, (state: State) => state);
