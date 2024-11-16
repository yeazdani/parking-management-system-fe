import { createReducer, on } from '@ngrx/store';
import { IVehicle } from '../../shared/interface/vehicle.interface';
import { createVehicleAction } from './vehicle.action';

export const vehicleFeatureKey = 'vehicle';

export interface State extends IVehicle {}

export const initialState: State = {
  licenseNumber: null,
  vehicleType: null,
  ownerName: null,
  ownerPhone: null,
  status: null,
  ownerAddress: null,
  entryTime: null,
  exitTime: null,
  parkingCharge: null,
};

export const reducer = createReducer(
  initialState,
  // on(createVehicleAction, (state: State, { data }) => {
  //   return { ...state, ...data };
  // })
);

