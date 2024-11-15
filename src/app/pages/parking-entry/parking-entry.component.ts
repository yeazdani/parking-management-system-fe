import { Component } from '@angular/core';
import { VehicleEntryFormComponent } from './components/vehicle-entry-form/vehicle-entry-form.component';

@Component({
  selector: 'app-parking-entry',
  standalone: true,
  imports: [VehicleEntryFormComponent],
  templateUrl: './parking-entry.component.html',
  styleUrl: './parking-entry.component.scss'
})
export class ParkingEntryComponent {

}
