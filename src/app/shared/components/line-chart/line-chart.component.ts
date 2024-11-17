import { Component } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-line-chart',
  standalone: false,
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss',
})
export class LineChartComponent {
  multi: any[] = multi;
  view: [number, number] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme: Color = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };


  constructor() {
    Object.assign(this, { multi });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}

export const multi = [
  {
    name: 'Germany',
    series: [
      {
        name: '1990',
        value: 62000000,
      },
      {
        name: '2010',
        value: 73000000,
      },
      {
        name: '2011',
        value: 89400000,
      },
    ],
  },

  {
    name: 'USA',
    series: [
      {
        name: '1990',
        value: 250000000,
      },
      {
        name: '2010',
        value: 309000000,
      },
      {
        name: '2011',
        value: 311000000,
      },
    ],
  },

  {
    name: 'France',
    series: [
      {
        name: '1990',
        value: 58000000,
      },
      {
        name: '2010',
        value: 50000020,
      },
      {
        name: '2011',
        value: 58000000,
      },
    ],
  },
  {
    name: 'UK',
    series: [
      {
        name: '1990',
        value: 57000000,
      },
      {
        name: '2010',
        value: 62000000,
      },
    ],
  },
];
