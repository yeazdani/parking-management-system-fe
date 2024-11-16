import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-vehicle-entry-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule],
  templateUrl: './vehicle-entry-form.component.html',
  styleUrl: './vehicle-entry-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleEntryFormComponent {
  vehicleEntryForm!: FormGroup;
  vehicleTypes = ['Micro-bus', 'Car', 'Truck', 'Bike'];

  constructor(private fb: FormBuilder) {
    this.vehicleEntryForm = this.fb.group({
      licenseNumber: ['', Validators.required],
      vehicleType: ['', Validators.required],
      ownerName: ['', Validators.required],
      ownerPhone: ['', [Validators.required]],
      status: ['', Validators.required],
      ownerAddress: [''],
      entryTime: ['', Validators.required],
      exitTime: [''],
      parkingCharge: [0, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.vehicleEntryForm.valid) {
      const vehicleData = this.vehicleEntryForm.value;
      this.saveToLocalStorage(vehicleData);
      alert('Vehicle data saved successfully!');
      this.vehicleEntryForm.reset();
    }
  }

  saveToLocalStorage(data: any) {
    const existingData = JSON.parse(localStorage.getItem('vehicleData') || '[]');
    existingData.push(data);
    localStorage.setItem('vehicleData', JSON.stringify(existingData));
  }
}
