import { createAction, props } from '@ngrx/store';
import { IVehicle } from '../../shared/interface/vehicle.interface';

export const createVehicleAction = createAction('[Parking Entry Component] Create Vehicle Action', props<{ vehicle: IVehicle }>());
export const createVehicleSuccessAction = createAction('[Parking Entry Component] Create Vehicle Success Action', props<{ vehicle: IVehicle }>());
export const createVehicleFailedAction = createAction('[Parking Entry Component] Create Vehicle Failed Action', props<{ error: any }>());
export const editVehicleAction = createAction('[Edit Vehicle Dialog] Edit Vehicle Action', props<{ vehicle: IVehicle }>());
export const editVehicleSuccessAction = createAction('[Edit Vehicle Dialog] Edit Vehicle Success Action', props<{ vehicles: IVehicle[] }>());

export const browserReloadAction = createAction('[App Component] Browser Reload Action');
export const getVehiclesAction = createAction('[Vehicle Effect] Get Vehicles Action', props<{ vehicles: IVehicle[] }>());
