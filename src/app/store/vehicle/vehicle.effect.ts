import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { merge, of } from 'rxjs';
import { catchError, mergeMap, withLatestFrom } from 'rxjs/operators';

import { AppState } from '..';
import {
  browserReloadAction,
  clearLocalStorage,
  clearStorageSuccess,
  createVehicleAction,
  createVehicleFailedAction,
  createVehicleSuccessAction,
  editVehicleAction,
  editVehicleSuccessAction,
  getVehiclesAction,
  setEmptySlots,
  setTotalCapacity,
  setTotalCapacitySuccess,
} from './vehicle.action';
import { selectVehicles } from './vehicle.selector';
import { StorageService } from '../../shared/services/storage.service';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { ESnackbar } from '../../shared/enum/shared.enum';
import { VehicleState } from './vehicle.reducer';
import { CalculationService } from '../../shared/services/calculation.service';

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
        vehicles.push(vehicle);
        const emptySlots = this.calculation.findEmptySlots(vehicles, vehicleState.totalCapacity);
        this.snackbarService.openSnackBar(ESnackbar.ADDED);
        return merge(of(createVehicleSuccessAction({ vehicle })), of(setEmptySlots({ emptySlots })));
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
        const emptySlots = this.calculation.findEmptySlots(vehicles, vehicleState.totalCapacity);
        this.storageService.updateVehicle(vehicle);
        this.snackbarService.openSnackBar(ESnackbar.UPDATED);
        return merge(of(editVehicleSuccessAction({ vehicles })), of(setEmptySlots({ emptySlots })));
      }),
      catchError((error) => [createVehicleFailedAction({ error })]) // Failure action)
    )
  );

  browserReload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(browserReloadAction),
      mergeMap(() => {
        const vehicles = this.storageService.getVehicles();
        const totalCapacity = this.storageService.getTotalTotalCapacity();
        const emptySlots = this.calculation.findEmptySlots(vehicles, totalCapacity);
        const vehicleState: VehicleState = { vehicles, totalCapacity, emptySlots };
        return of(getVehiclesAction({ vehicleState: vehicleState }));
      }),
      catchError((error) => [createVehicleFailedAction({ error })]) // Failure action)
    )
  );

  totalCapacity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setTotalCapacity),
      withLatestFrom(this.store.select(selectVehicles)),
      mergeMap(([action, vehicleState]) => {
        this.storageService.setTotalTotalCapacity(action.totalCapacity);
        this.snackbarService.openSnackBar(ESnackbar.CAPACITY);
        return of(setTotalCapacitySuccess({ totalCapacity: action.totalCapacity }));
      }),
      catchError((error) => [createVehicleFailedAction({ error })]) // Failure action)
    )
  );

  clearStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clearLocalStorage),
      mergeMap(() => {
        this.storageService.clearStorage();
        this.snackbarService.openSnackBar(ESnackbar.CLEARED);
        return of(clearStorageSuccess());
      }),
      catchError((error) => [createVehicleFailedAction({ error })]) // Failure action)
    )
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private storageService: StorageService, private snackbarService: SnackbarService, private calculation: CalculationService) {}
}
