import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { VehicleEntryFormComponent } from '../../shared/components/vehicle-entry-form/vehicle-entry-form.component';
import { IVehicle } from '../../shared/interface/vehicle.interface';
import { AppState } from '../../store';
import { createVehicleAction } from '../../store/vehicle/vehicle.action';
import { selectVehicles } from '../../store/vehicle/vehicle.selector';

@Component({
  selector: 'app-parking-entry',
  standalone: true,
  imports: [VehicleEntryFormComponent, RouterLink],
  templateUrl: './parking-entry.component.html',
  styleUrl: './parking-entry.component.scss',
})
export class ParkingEntryComponent {
  private subscription = new Subscription();
  totalCapacity: number | null = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscription.add(
      this.store.select(selectVehicles).subscribe((vehicleState) => {
        this.totalCapacity = vehicleState.totalCapacity;
      })
    );
  }

  addVehicle(vehicleData: IVehicle) {
    this.store.dispatch(createVehicleAction({ vehicle: vehicleData }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
