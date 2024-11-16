import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, withLatestFrom } from 'rxjs/operators';

import { AppState } from '..';
import { createVehicleAction, createVehicleSuccessAction } from './vehicle.action';
import { selectVehicles, selectVehicleState } from './vehicle.selector';
import { StorageService } from '../../shared/services/storage.service';

@Injectable()
export class VehicleEffects {
  createVehicle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createVehicleAction), // Listen for the createVehicleAction action
      withLatestFrom(this.store.pipe(select(selectVehicles))),
      mergeMap(([action, vehicleState]) => {
        console.log('action :', action);
        console.log('Vehicle State:', vehicleState);
        // Check if vehicleState is undefined or null
        if (!vehicleState) {
          throw new Error('Vehicle state is undefined');
        }

        return of(createVehicleSuccessAction({ data: { ownerName: 'hello' } }));
      })
    )
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private storageService: StorageService) {}
}
