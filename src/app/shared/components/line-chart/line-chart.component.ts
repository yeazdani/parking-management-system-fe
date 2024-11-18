import { Component, Input } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-line-chart',
  standalone: false,
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss',
})
export class LineChartComponent {
  views = ['daily', 'weekly', 'monthly'];
  @Input() vehiclesEntryTimes!: { entryTime: Date }[];

  // vehiclesEntryTimes: { entryTime: Date }[] = [
  //   { entryTime: new Date('2024-11-10T10:00:00') },
  //   { entryTime: new Date('2024-11-10T12:00:00') },
  //   { entryTime: new Date('2024-11-11T09:00:00') },
  //   { entryTime: new Date('2024-11-11T11:00:00') },
  //   { entryTime: new Date('2024-11-12T14:00:00') },
  //   { entryTime: new Date('2024-11-12T15:00:00') },
  //   { entryTime: new Date('2024-11-14T09:30:00') },
  //   { entryTime: new Date('2024-11-15T17:00:00') },
  //   { entryTime: new Date('2024-11-15T19:30:00') },
  //   { entryTime: new Date('2024-11-15T21:00:00') },
  // ];

  lineChartData: any[] = [];
  selectedView: string = 'daily';

  ngOnInit() {
    this.updateChartData('daily'); // Default view
  }

  updateChartData(view: string) {
    this.selectedView = view;

    const groupedData = this.groupParkingData(view);
    this.lineChartData = [
      {
        name: 'Vehicles Parked',
        series: groupedData.map((data) => ({
          name: data.label, // X-axis label (date, week, or month)
          value: data.count, // Number of cars parked
        })),
      },
    ];
  }

  groupParkingData(view: string) {
    const grouped: { [key: string]: number } = {};

    this.vehiclesEntryTimes.forEach((vehicle) => {
      const date = new Date(vehicle.entryTime);
      let key = '';

      if (view === 'daily') {
        key = date.toISOString().split('T')[0]; // Group by day (YYYY-MM-DD)
      } else if (view === 'weekly') {
        const week = this.getWeekOfYear(date);
        key = `Week ${week}, ${date.getFullYear()}`; // Group by week
      } else if (view === 'monthly') {
        key = `${date.toLocaleString('default', { month: 'long' })}, ${date.getFullYear()}`; // Group by month
      }

      grouped[key] = (grouped[key] || 0) + 1;
    });

    return Object.keys(grouped).map((key) => ({
      label: key,
      count: grouped[key],
    }));
  }

  getWeekOfYear(date: Date): number {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / (24 * 60 * 60 * 1000);
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  }
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
  xAxisLabel: string = 'Time';
  yAxisLabel: string = 'Number of Vehicles';
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
