import { createReducer, on } from '@ngrx/store';
import { IVehicle } from '../../shared/interface/vehicle.interface';
import { createVehicleAction, createVehicleSuccessAction, editVehicleSuccessAction, getVehiclesAction } from './vehicle.action';

export const vehicleFeatureKey = 'vehicle';

export interface VehicleState {
  vehicles: IVehicle[];
}

export const initialState: VehicleState = {
  vehicles: [],
};

export const reducer = createReducer(
  initialState,
  on(createVehicleSuccessAction, (state, { vehicle }) => ({
    ...state,
    vehicles: [...state.vehicles, vehicle],
  })),
  on(editVehicleSuccessAction, (state, { vehicles }) => ({
    ...state,
    vehicles: vehicles,
  })),
  on(getVehiclesAction, (state, { vehicles }) => ({
    ...state,
    vehicles: vehicles,
  }))
);
