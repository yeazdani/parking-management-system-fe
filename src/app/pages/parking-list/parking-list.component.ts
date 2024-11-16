import { Component, inject, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IVehicle } from '../../shared/interface/vehicle.interface';
import { VehicleEditModalComponent } from './vehicle-edit-modal/vehicle-edit-modal.component';
import { VehicleListComponent } from '../../shared/components/vehicle-list/vehicle-list.component';

export const vehicles: IVehicle[] = [
  {
    licenseNumber: 'ASXE#43',
    vehicleType: 'Car',
    ownerName: 'John Doe',
    ownerPhone: '01683204856',
    status: 'in',
    ownerAddress: 'Adabor, Dhaka',
    entryTime: new Date(),
    exitTime: null,
    parkingCharge: 4,
  },
];

@Component({
  selector: 'app-parking-list',
  standalone: true,
  imports: [CommonModule, VehicleListComponent],
  templateUrl: './parking-list.component.html',
  styleUrl: './parking-list.component.scss',
})
export class ParkingListComponent {
  vehicles = vehicles;
  readonly dialog = inject(MatDialog);

  constructor() {}

  ngOnInit(): void {}

  onVehicleEdit(vehicle: IVehicle) {
    const dialogRef = this.dialog.open(VehicleEditModalComponent, { data: vehicle });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
