import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { IVehicle } from '../../shared/interface/vehicle.interface';
import { VehicleEditModalComponent } from './vehicle-edit-modal/vehicle-edit-modal.component';
import { VehicleListComponent } from '../../shared/components/vehicle-list/vehicle-list.component';

import { AppState } from '../../store';
import { selectVehicles } from '../../store/vehicle/vehicle.selector';
import { editVehicleAction } from '../../store/vehicle/vehicle.action';

@Component({
  selector: 'app-parking-list',
  standalone: true,
  imports: [CommonModule, VehicleListComponent, RouterLink],
  templateUrl: './parking-list.component.html',
  styleUrl: './parking-list.component.scss',
})
export class ParkingListComponent {
  vehicles: IVehicle[] = [];
  readonly dialog = inject(MatDialog);

  private subcription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subcription.add(
      this.store.select(selectVehicles).subscribe((vehicleState) => {
        this.vehicles = vehicleState.vehicles;
      })
    );
  }

  onVehicleEdit(vehicle: IVehicle) {
    const dialogRef = this.dialog.open(VehicleEditModalComponent, { data: vehicle });
    dialogRef.afterClosed().subscribe({
      next: (vehicle: IVehicle) => {
        this.store.dispatch(editVehicleAction({ vehicle }));
      },
    });
  }

  ngOnDestroy(): void {}
}
