import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IVehicle } from '../../interface/vehicle.interface';

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
