import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { vehicleFeatureKey } from './vehicle/vehicle.reducer';
import * as vehicle from './vehicle/vehicle.reducer';
import { VehicleEffects } from './vehicle/vehicle.effect';

export interface AppState {
  router: RouterReducerState<any>;
  [vehicleFeatureKey]: vehicle.VehicleState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  [vehicleFeatureKey]: vehicle.reducer,
};

export const effects: any[] = [VehicleEffects];

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
