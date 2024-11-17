import { Injectable } from '@angular/core';
import { IVehicle } from '../interface/vehicle.interface';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  constructor() {}

  findEmptySlots(vehicles: IVehicle[], totalCapacity: number | null) {
    if (vehicles.length && totalCapacity) {
      const currentlyParkedVehicles = vehicles.filter((v) => v.status === 'in').length;
      return totalCapacity - currentlyParkedVehicles;
    }
    return null;
  }
}
