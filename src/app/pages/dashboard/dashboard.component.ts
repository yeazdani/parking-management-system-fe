import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AppState } from '../../store';
import { PieChartComponent } from '../../shared/components/pie-chart/pie-chart.component';
import { LineChartModule } from '../../shared/components/line-chart/line-chart.module';
import { selectVehicles } from '../../store/vehicle/vehicle.selector';
import { CalculationService } from '../../shared/services/calculation.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, PieChartComponent, LineChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private subscription: Subscription = new Subscription();
  pieCharData!: { name: string; value: number }[];
  lineCharData!: any[];
  vehicleTypes = ['Micro-bus', 'Car', 'Truck', 'Bike'];
  totalCarParked = 0;
  totalParkingSlots: string | number = 'To be Defined!';
  availableParkingSlots: string | number = 'To be Calculated!';

  constructor(private store: Store<AppState>, private calculationService: CalculationService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.store.select(selectVehicles).subscribe((vehicleState) => {
        this.availableParkingSlots = vehicleState.emptySlots || 'To be calculated!';
        this.totalParkingSlots = vehicleState.totalCapacity || 'To be Defined!';
        if (vehicleState.vehicles.length) {
          const vehicles = [...vehicleState.vehicles];
          this.pieCharData = this.calculationService.getPieChartDataFormat(vehicles, this.vehicleTypes);
          this.totalCarParked = vehicleState.vehicles.length;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
