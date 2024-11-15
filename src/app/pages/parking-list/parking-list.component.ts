import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Vehicle {
  ownerName: string;
  vehicleType: string;
  licenseNumber: string;
  entryTime: Date;
  exitTime?: Date; // Optional, exit time may not always be available
  status: 'in' | 'out';
  isEditing: boolean;
}

export const vehicles: Vehicle[] = [
  {
    ownerName: 'John Doe',
    vehicleType: 'Car',
    licenseNumber: 'ABC123',
    entryTime: new Date('2024-11-15T08:30:00'),
    exitTime: new Date('2024-11-15T17:30:00'),
    status: 'in',
    isEditing: false,
  },
  {
    ownerName: 'Jane Smith',
    vehicleType: 'Truck',
    licenseNumber: 'XYZ789',
    entryTime: new Date('2024-11-15T09:00:00'),
    exitTime: undefined, // No exit time yet
    status: 'out',
    isEditing: false,
  },
  {
    ownerName: 'Alice Brown',
    vehicleType: 'Bike',
    licenseNumber: 'BIKE123',
    entryTime: new Date('2024-11-15T10:00:00'),
    exitTime: undefined,
    status: 'in',
    isEditing: true, // This record is being edited
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
    // this.dataSource.filter = filterValue.trim().toLowerCase();
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
