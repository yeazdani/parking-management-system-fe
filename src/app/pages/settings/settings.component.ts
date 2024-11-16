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
    const data: IVehicle = {
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

    this.store.dispatch(createVehicleAction({ data: data }));

    // this.subscription.add(
    //   this.store
    //     .select((state) => state)
    //     .subscribe((state) => {
    //       console.log('Full state from store:', state);
    //     })
    // );

    this.store.select(selectVehicles).subscribe((data) => {
      console.log('data :', data);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
