import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IVehicle } from '../../shared/interface/vehicle.interface';

export const vehicles: IVehicle[] = [
  {
    ownerName: 'John Doe',
    vehicleType: 'Car',
    licenseNumber: 'ABC123',
    entryTime: new Date('2024-11-15T08:30:00'),
    exitTime: new Date('2024-11-15T17:30:00'),
    status: 'in',
  },
  {
    ownerName: 'Jane Smith',
    vehicleType: 'Truck',
    licenseNumber: 'XYZ789',
    entryTime: new Date('2024-11-15T09:00:00'),
    exitTime: undefined, // No exit time yet
    status: 'out',
  },
  {
    ownerName: 'Alice Brown',
    vehicleType: 'Bike',
    licenseNumber: 'BIKE123',
    entryTime: new Date('2024-11-15T10:00:00'),
    exitTime: undefined,
    status: 'in',
  },
];

@Component({
  selector: 'app-parking-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './parking-list.component.html',
  styleUrl: './parking-list.component.scss',
})
export class ParkingListComponent {
  vehicles = vehicles;
  keys = Object.keys(this.vehicles[0]);

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

  newVehicle = {
    ownerName: '',
    vehicleType: '',
    licenseNumber: '',
    status: 'In',
    isEditing: false,
  };

  // addVehicle() {
  //   if (this.newVehicle.ownerName && this.newVehicle.vehicleType && this.newVehicle.licenseNumber) {
  //     this.vehicles.push({ ...this.newVehicle });
  //     this.resetNewVehicle();
  //   }
  // }

  editVehicle(vehicle: any) {}

  deleteVehicle(index: number) {
    this.vehicles.splice(index, 1);
  }

  resetNewVehicle() {
    this.newVehicle = {
      ownerName: '',
      vehicleType: '',
      licenseNumber: '',
      status: 'In',
      isEditing: false,
    };
  }
}
