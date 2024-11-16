import { createAction, props } from '@ngrx/store';
import { IVehicle } from '../../shared/interface/vehicle.interface';

export const createVehicleAction = createAction('[ParkingEntryComponent] Create Vehicle Action', props<{ data: IVehicle }>());
export const createVehicleSuccessAction = createAction('[ParkingEntryComponent] Create Vehicle Success Action', props<{ data: IVehicle }>());
