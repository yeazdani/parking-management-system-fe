import { Component } from '@angular/core';
import { IVehicle } from '../../shared/interface/vehicle.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { createVehicleAction } from '../../store/vehicle/vehicle.action';
import { Subject, Subscription } from 'rxjs';
import { selectVehicles } from '../../store/vehicle/vehicle.selector';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  private subscription: Subscription = new Subscription();
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
 
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
