import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Color, LegendPosition, LineChartComponent, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { AppState } from '../../store';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from '../../shared/components/pie-chart/pie-chart.component';
import { LineChartModule } from '../../shared/components/line-chart/line-chart.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, PieChartComponent, LineChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
