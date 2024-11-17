import { Component } from '@angular/core';
import { Color, LegendPosition, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent {
  constructor() {
    Object.assign(this, { single });
  }

  view: [number, number] = [700, 400];

  colorScheme: Color = {
    domain: ['#99CCE5', '#FF7F7F'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };

  single = [
    { name: 'Germany', value: 8940000 },
    { name: 'USA', value: 5000000 },
    { name: 'France', value: 7200000 },
  ];

  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;

  onSelect(event: any): void {
    console.log('Item clicked', event);
  }

  onActivate(event: any): void {
    console.log('Activate', event);
  }

  onDeactivate(event: any): void {
    console.log('Deactivate', event);
  }
}

export const single = [
  {
    name: 'Germany',
    value: 8940000,
  },
  {
    name: 'USA',
    value: 5000000,
  },
  {
    name: 'France',
    value: 7200000,
  },
  {
    name: 'UK',
    value: 6200000,
  },
];
