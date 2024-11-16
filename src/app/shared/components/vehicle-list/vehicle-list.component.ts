import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IVehicle } from '../../interface/vehicle.interface';
import { VehicleEditModalComponent } from '../../../pages/parking-list/vehicle-edit-modal/vehicle-edit-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.scss',
})
export class VehicleListComponent {
  @Input() vehicles!: IVehicle[];
  @Output() onEditOutput = new EventEmitter<IVehicle>();

  columns!: string[];

  constructor() {}

  ngOnInit(): void {
    if (this.vehicles.length) {
      this.columns = Object.keys(this.vehicles[0]);
    }
  }

  onVehicleEdit(vehicle: IVehicle) {
    this.onEditOutput.emit(vehicle);
  }
}
