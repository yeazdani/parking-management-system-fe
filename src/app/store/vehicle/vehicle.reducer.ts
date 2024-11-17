import { createReducer, on } from '@ngrx/store';
import { IVehicle } from '../../shared/interface/vehicle.interface';
import { clearStorageSuccess, createVehicleAction, createVehicleSuccessAction, editVehicleSuccessAction, getVehiclesAction, setEmptySlots, setTotalCapacitySuccess } from './vehicle.action';

export const vehicleFeatureKey = 'vehicle';

export interface VehicleState {
  vehicles: IVehicle[];
  totalCapacity: number | null;
  emptySlots: number | null;
}

export const initialState: VehicleState = {
  vehicles: [],
  totalCapacity: null,
  emptySlots: null,
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
  on(setTotalCapacitySuccess, (state, { totalCapacity }) => ({
    ...state,
    totalCapacity: totalCapacity,
  })),
  on(getVehiclesAction, (state, { vehicleState }) => ({
    ...state,
    vehicles: vehicleState.vehicles,
    totalCapacity: vehicleState.totalCapacity,
    emptySlots: vehicleState.emptySlots,
  })),
  on(setEmptySlots, (state, { emptySlots }) => ({
    ...state,
    emptySlots: emptySlots,
  })),
  on(clearStorageSuccess, (state) => ({
    ...state,
    vehicles: [],
    totalCapacity: null,
    emptySlots: null,
  }))
);
