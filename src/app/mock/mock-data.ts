import { IVehicle } from "../shared/interface/vehicle.interface";

export const mockVehicles: IVehicle[] = [
    { id: 1, licenseNumber: "ABC-1234", vehicleType: "Car", ownerName: "John Doe", ownerPhone: "123-456-7890", status: "in", ownerAddress: "123 Elm Street", entryTime: new Date("2024-11-17T08:30:00"), exitTime: null, parkingCharge: null },
    { id: 2, licenseNumber: "XYZ-5678", vehicleType: "Truck", ownerName: "Jane Smith", ownerPhone: "987-654-3210", status: "out", ownerAddress: "456 Oak Avenue", entryTime: new Date("2024-11-17T07:00:00"), exitTime: new Date("2024-11-17T09:00:00"), parkingCharge: 50 },
    { id: 3, licenseNumber: "LMN-9101", vehicleType: "Bike", ownerName: "Mike Johnson", ownerPhone: "555-111-2222", status: "in", ownerAddress: "789 Pine Road", entryTime: new Date("2024-11-17T06:15:00"), exitTime: null, parkingCharge: null },
    { id: 4, licenseNumber: "GHI-2345", vehicleType: "Micro-bus", ownerName: "Alice Brown", ownerPhone: "444-333-5555", status: "out", ownerAddress: "321 Birch Lane", entryTime: new Date("2024-11-17T05:45:00"), exitTime: new Date("2024-11-17T07:45:00"), parkingCharge: 100 },
    { id: 5, licenseNumber: "JKL-6789", vehicleType: "Car", ownerName: "Robert Wilson", ownerPhone: "666-777-8888", status: "in", ownerAddress: "987 Cedar Boulevard", entryTime: new Date("2024-11-17T10:00:00"), exitTime: null, parkingCharge: null },
    { id: 6, licenseNumber: "MNO-4321", vehicleType: "Truck", ownerName: "Sarah Miller", ownerPhone: "111-222-3333", status: "out", ownerAddress: "112 Maple Road", entryTime: new Date("2024-11-16T12:00:00"), exitTime: new Date("2024-11-17T01:00:00"), parkingCharge: 70 },
    { id: 7, licenseNumber: "PQR-2341", vehicleType: "Bike", ownerName: "David White", ownerPhone: "333-444-5555", status: "in", ownerAddress: "654 Birch Avenue", entryTime: new Date("2024-11-17T09:00:00"), exitTime: null, parkingCharge: null },
    { id: 8, licenseNumber: "STU-6783", vehicleType: "Car", ownerName: "Lily Green", ownerPhone: "222-555-6666", status: "out", ownerAddress: "222 Pine Street", entryTime: new Date("2024-11-16T10:15:00"), exitTime: new Date("2024-11-17T06:15:00"), parkingCharge: 50 },
    { id: 9, licenseNumber: "VWX-8932", vehicleType: "Micro-bus", ownerName: "Mark Black", ownerPhone: "999-888-7777", status: "in", ownerAddress: "321 Oak Blvd", entryTime: new Date("2024-11-17T11:30:00"), exitTime: null, parkingCharge: null },
    { id: 10, licenseNumber: "YZA-1235", vehicleType: "Car", ownerName: "Olivia Scott", ownerPhone: "888-777-6666", status: "in", ownerAddress: "123 Maple Lane", entryTime: new Date("2024-11-17T12:00:00"), exitTime: null, parkingCharge: null },
    { id: 11, licenseNumber: "BCD-5679", vehicleType: "Truck", ownerName: "Lucas Harris", ownerPhone: "444-555-6666", status: "out", ownerAddress: "890 Elm Road", entryTime: new Date("2024-11-16T09:30:00"), exitTime: new Date("2024-11-17T02:00:00"), parkingCharge: 90 },
    { id: 12, licenseNumber: "DEF-8901", vehicleType: "Bike", ownerName: "Emily Clark", ownerPhone: "777-888-9999", status: "in", ownerAddress: "987 Oak Avenue", entryTime: new Date("2024-11-17T08:30:00"), exitTime: null, parkingCharge: null },
    { id: 13, licenseNumber: "GHI-5673", vehicleType: "Car", ownerName: "James Turner", ownerPhone: "555-666-7777", status: "out", ownerAddress: "654 Pine Lane", entryTime: new Date("2024-11-17T07:30:00"), exitTime: new Date("2024-11-17T10:00:00"), parkingCharge: 60 },
    { id: 14, licenseNumber: "JKL-9123", vehicleType: "Truck", ownerName: "Sophia Williams", ownerPhone: "888-999-0000", status: "in", ownerAddress: "321 Oak Lane", entryTime: new Date("2024-11-17T10:30:00"), exitTime: null, parkingCharge: null },
    { id: 15, licenseNumber: "LMN-3456", vehicleType: "Micro-bus", ownerName: "Ethan King", ownerPhone: "333-444-5555", status: "out", ownerAddress: "456 Maple Avenue", entryTime: new Date("2024-11-17T01:00:00"), exitTime: new Date("2024-11-17T08:30:00"), parkingCharge: 120 },
    { id: 16, licenseNumber: "MNO-6784", vehicleType: "Bike", ownerName: "Sophie Brown", ownerPhone: "222-333-4444", status: "in", ownerAddress: "789 Elm Blvd", entryTime: new Date("2024-11-17T09:15:00"), exitTime: null, parkingCharge: null },
    { id: 17, licenseNumber: "PQR-8902", vehicleType: "Truck", ownerName: "John Wilson", ownerPhone: "777-888-9999", status: "out", ownerAddress: "123 Cedar Road", entryTime: new Date("2024-11-17T11:00:00"), exitTime: new Date("2024-11-17T12:00:00"), parkingCharge: 80 },
    { id: 18, licenseNumber: "STU-4569", vehicleType: "Micro-bus", ownerName: "Anna Moore", ownerPhone: "444-555-6666", status: "in", ownerAddress: "654 Cedar Lane", entryTime: new Date("2024-11-17T02:30:00"), exitTime: null, parkingCharge: null },
    { id: 19, licenseNumber: "VWX-6781", vehicleType: "Car", ownerName: "Charlie Perez", ownerPhone: "999-000-1111", status: "out", ownerAddress: "987 Elm Blvd", entryTime: new Date("2024-11-17T06:30:00"), exitTime: new Date("2024-11-17T09:30:00"), parkingCharge: 40 },
    { id: 20, licenseNumber: "YZA-5670", vehicleType: "Bike", ownerName: "Mia Davis", ownerPhone: "666-555-4444", status: "in", ownerAddress: "456 Pine Road", entryTime: new Date("2024-11-17T12:30:00"), exitTime: null, parkingCharge: null }
  ];
  