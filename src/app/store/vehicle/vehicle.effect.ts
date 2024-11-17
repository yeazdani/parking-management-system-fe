import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, mergeMap, withLatestFrom } from 'rxjs/operators';

import { AppState } from '..';
import { browserReloadAction, createVehicleAction, createVehicleFailedAction, createVehicleSuccessAction, editVehicleAction, editVehicleSuccessAction, getVehiclesAction } from './vehicle.action';
import { selectVehicles } from './vehicle.selector';
import { StorageService } from '../../shared/services/storage.service';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { ESnackbar } from '../../shared/enum/snackbar.enum';

@Injectable()
export class VehicleEffects {
  createVehicle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createVehicleAction),
      withLatestFrom(this.store.select(selectVehicles)),
      mergeMap(([action, vehicleState]) => {
        const vehicles = [...vehicleState.vehicles];
        const vehicle = {
          ...action.vehicle,
          id: vehicles.length > 0 ? vehicles.length + 1 : 1,
        };
        this.storageService.addVehicle(vehicle);
        this.snackbarService.openSnackBar(ESnackbar.ADDED);
        return of(createVehicleSuccessAction({ vehicle }));
      }),
      catchError((error) => [createVehicleFailedAction({ error })]) // Failure action)
    )
  );

  editVehicle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editVehicleAction),
      withLatestFrom(this.store.select(selectVehicles)),
      mergeMap(([action, vehicleState]) => {
        const vehicle = { ...action.vehicle };
        const vehicles = [...vehicleState.vehicles];
        const index = vehicles.findIndex((item) => item.id === vehicle.id);
        vehicles[index] = vehicle;
        this.storageService.updateVehicle(vehicle);
        this.snackbarService.openSnackBar(ESnackbar.UPDATED);
        return of(editVehicleSuccessAction({ vehicles }));
      }),
      catchError((error) => [createVehicleFailedAction({ error })]) // Failure action)
    )
  );

  browserReload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(browserReloadAction),
      mergeMap(() => {
        const vehicles = this.storageService.getVehicles();
        if (vehicles.length) {
          return of(getVehiclesAction({ vehicles: vehicles }));
        }
        return of();
      }),
      catchError((error) => [createVehicleFailedAction({ error })]) // Failure action)
    )
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private storageService: StorageService, private snackbarService: SnackbarService) {}
}
