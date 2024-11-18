import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { IVehicle } from '../interface/vehicle.interface';
import { ELocalStorageKeys } from '../enum/shared.enum';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private localStorage: LocalStorageService) {}

  saveVehicles(vehicles: IVehicle[]): void {
    this.localStorage.store(ELocalStorageKeys.VEHICLES, vehicles);
  }

  getVehicles(): IVehicle[] {
    return this.localStorage.retrieve(ELocalStorageKeys.VEHICLES) || [];
  }

  addVehicle(vehicle: IVehicle): void {
    if (this.getVehicles().length > 0) {
      const vehicles = [...this.getVehicles()];
      vehicles.push(vehicle);
      this.saveVehicles(vehicles);
    } else {
      const vehicles = [];
      vehicles.push(vehicle);
      this.saveVehicles(vehicles);
    }
  }

  setTotalTotalCapacity(totalCapacity: number): void {
    this.localStorage.store(ELocalStorageKeys.TOTAL_CAPACITY, totalCapacity);
  }

  getTotalTotalCapacity() {
    return this.localStorage.retrieve(ELocalStorageKeys.TOTAL_CAPACITY) || null;
  }

  updateVehicle(updatedVehicle: IVehicle): void {
    const vehicles = [...this.getVehicles()];
    const index = vehicles.findIndex((item) => item.id === updatedVehicle.id);
    if (vehicles[index]) {
      vehicles[index] = updatedVehicle;
      this.saveVehicles(vehicles);
    }
  }

  deleteVehicle(index: number): void {
    const vehicles = this.getVehicles();
    if (vehicles[index]) {
      vehicles.splice(index, 1);
      this.saveVehicles(vehicles);
    }
  }

  clearStorage(): void {
    this.localStorage.clear(ELocalStorageKeys.VEHICLES);
    this.localStorage.clear(ELocalStorageKeys.TOTAL_CAPACITY);
  }

  setMockData(vehicles: IVehicle[]): void {
    this.localStorage.store(ELocalStorageKeys.VEHICLES, vehicles);
  }
}
