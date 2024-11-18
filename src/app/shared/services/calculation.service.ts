import { Injectable } from '@angular/core';
import { IVehicle } from '../interface/vehicle.interface';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  constructor() {}

  /**
   * Calculates the number of empty slots in a parking lot based on the total capacity
   * and the number of vehicles currently parked.
   * @param {IVehicle[]} vehicles - Array of vehicle objects, each with a `status` property.
   * @param {number | null} totalCapacity - The total capacity of the parking lot. If null, the function returns null.
   * @returns {number | null} - The number of empty slots available, or null if input is invalid.
   */
  findEmptySlots(vehicles: IVehicle[], totalCapacity: number | null) {
    if (vehicles.length && totalCapacity) {
      const currentlyParkedVehicles = vehicles.filter((v) => v.status === 'in').length;
      return totalCapacity - currentlyParkedVehicles;
    }
    return null;
  }

  /**
   * Function to calculate the count of vehicles by their type.
   * It returns an array of objects where names are vehicle types and values are the count of vehicles of that type.
   * @param {IVehicle[]} vehicles - An array of vehicle objects that contain information about the vehicles.
   * @param {string[]} vehicleTypes - An array of vehicle types to filter and count the vehicles by.
   * @returns [{name:string,value:number}]
   */
  getPieChartDataFormat(vehicles: IVehicle[], vehicleTypes: string[]) {
    const carTypeCount: { [key: string]: any } = {};

    vehicleTypes.forEach((key) => {
      carTypeCount[key] = 0;
    });

    vehicles.forEach((vehicle) => {
      if (carTypeCount.hasOwnProperty(vehicle.vehicleType || '')) {
        carTypeCount[vehicle.vehicleType || '']++;
      }
    });

    const pieChartData: { name: string; value: number }[] = [];
    Object.keys(carTypeCount).forEach((key) => {
      pieChartData.push({ name: key, value: carTypeCount[key] });
    });

    return pieChartData;
  }
}
