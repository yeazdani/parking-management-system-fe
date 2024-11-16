import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { AppState } from './store';
import { Store } from '@ngrx/store';
import { createVehicleAction } from './store/vehicle/vehicle.action';
import { IVehicle } from './shared/interface/vehicle.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'parking-management-system-fe';
  currentPage = 'Dashboard';
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    const vehicleData: IVehicle = {
      licenseNumber: 'ABC25X0',
      vehicleType: 'Bike',
      ownerName: 'Yeazdani',
      ownerPhone: null,
      status: null,
      ownerAddress: null,
      entryTime: null,
      exitTime: null,
      parkingCharge: null,
    };
  }
}
