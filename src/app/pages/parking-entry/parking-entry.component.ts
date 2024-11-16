import { Component } from '@angular/core';
import { VehicleEntryFormComponent } from '../../shared/components/vehicle-entry-form/vehicle-entry-form.component';
import { IVehicle } from '../../shared/interface/vehicle.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';

@Component({
  selector: 'app-parking-entry',
  standalone: true,
  imports: [VehicleEntryFormComponent],
  templateUrl: './parking-entry.component.html',
  styleUrl: './parking-entry.component.scss',
})
export class ParkingEntryComponent {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  addVehicle(vehicleData: IVehicle) {}
}
