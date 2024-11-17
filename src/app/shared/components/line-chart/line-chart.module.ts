import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [LineChartComponent],
  imports: [
    CommonModule,
    NgxChartsModule, // Importing ngx-charts for line chart support
  ],
  exports: [LineChartComponent], // Export the component for use in other modules
})
export class LineChartModule {}
