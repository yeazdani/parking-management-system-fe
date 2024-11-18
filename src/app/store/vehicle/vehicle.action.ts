import { createAction, props } from '@ngrx/store';
import { IVehicle } from '../../shared/interface/vehicle.interface';
import { VehicleState } from './vehicle.reducer';

export const createVehicleAction = createAction('[Parking Entry Component] Create Vehicle Action', props<{ vehicle: IVehicle }>());
export const createVehicleSuccessAction = createAction('[Parking Entry Component] Create Vehicle Success Action', props<{ vehicle: IVehicle }>());
export const createVehicleFailedAction = createAction('[Parking Entry Component] Create Vehicle Failed Action', props<{ error: any }>());
export const editVehicleAction = createAction('[Edit Vehicle Dialog] Edit Vehicle Action', props<{ vehicle: IVehicle }>());
export const editVehicleSuccessAction = createAction('[Edit Vehicle Dialog] Edit Vehicle Success Action', props<{ vehicles: IVehicle[] }>());

export const browserReloadAction = createAction('[App Component] Browser Reload Action');
export const getVehiclesAction = createAction('[Vehicle Effect] Get Vehicles Action', props<{ vehicleState: VehicleState }>());
export const setTotalCapacity = createAction('[Settings Component] Total Capacity Action', props<{ totalCapacity: number }>());
export const setTotalCapacitySuccess = createAction('[Vehicle Effect Total] Total Capacity Success Action', props<{ totalCapacity: number }>());

export const clearLocalStorage = createAction('[Settings Component CLS] Clear Local Storage Action');
export const clearStorageSuccess = createAction('[Vehicle Effect CLS] Clear Storage Success Action');
export const populateMockData = createAction('[Settings Component PMD] Populate Mock Data Action', props<{ vehicles: IVehicle[] }>());
export const populateMockDataSuccess = createAction('[Vehicle Effect PMD] Populate Mock Data Success Action', props<{ vehicles: IVehicle[] }>());

export const setEmptySlots = createAction('[Vehicle Effect ES] Set Empty Slots Action', props<{ emptySlots: number | null }>());
