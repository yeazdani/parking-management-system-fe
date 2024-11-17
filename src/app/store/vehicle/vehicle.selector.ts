import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VehicleState, vehicleFeatureKey } from './vehicle.reducer';

export const selectVehicleState = createFeatureSelector<VehicleState>(vehicleFeatureKey);

export const selectVehicles = createSelector(selectVehicleState, (state: VehicleState) => state);
