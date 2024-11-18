import { Component } from '@angular/core';
import { IVehicle } from '../../shared/interface/vehicle.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { clearLocalStorage, createVehicleAction, populateMockData, setTotalCapacity } from '../../store/vehicle/vehicle.action';
import { Subject, Subscription } from 'rxjs';
import { selectVehicles } from '../../store/vehicle/vehicle.selector';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { StorageService } from '../../shared/services/storage.service';
import { mockVehicles } from '../../mock/mock-data';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  private subscription: Subscription = new Subscription();

  settingsForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private storage: StorageService) {
    this.settingsForm = this.fb.group({
      totalCapacity: [null, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.subscription.add(
      this.store.select(selectVehicles).subscribe((vehicleState) => {
        if (vehicleState.totalCapacity) {
          this.settingsForm.get('totalCapacity')?.setValue(vehicleState.totalCapacity);
        } else {
          this.settingsForm.get('totalCapacity')?.setValue(null);
        }
      })
    );
  }

  onSubmit(): void {
    this.store.dispatch(setTotalCapacity({ totalCapacity: this.settingsForm.get('totalCapacity')?.value }));
  }

  clearLocalStorage(): void {
    this.store.dispatch(clearLocalStorage());
  }

  populateMockData() {
    this.store.dispatch(populateMockData({ vehicles: mockVehicles }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
