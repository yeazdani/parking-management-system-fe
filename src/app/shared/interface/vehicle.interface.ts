export interface IVehicle {
  licenseNumber?: string | null;
  vehicleType?: 'Micro-bus' | 'Car' | 'Truck' | 'Bike' | null;
  ownerName?: string | null;
  ownerPhone?: string | null;
  status?: 'in' | 'out' | null;
  ownerAddress?: string | null;
  entryTime?: Date | null;
  exitTime?: Date | null;
  parkingCharge?: number | null;
}
