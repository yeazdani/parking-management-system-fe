import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

export enum ELocalStorageKeys {
  VEHICLES = 'user',
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private localStorage: LocalStorageService) {}

  addVehicleData() {}

  editVehicleData() {}

  removeVehicleData() {}
}
