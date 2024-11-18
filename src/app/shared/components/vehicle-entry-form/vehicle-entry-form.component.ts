import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { IVehicle } from '../../interface/vehicle.interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-vehicle-entry-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatButtonModule],
  templateUrl: './vehicle-entry-form.component.html',
  styleUrl: './vehicle-entry-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleEntryFormComponent {
  vehicleEntryForm!: FormGroup;
  vehicleTypes = ['Micro-bus', 'Car', 'Truck', 'Bike'];

  @Input() vehicle!: IVehicle;
  @Output() vehicleFormOutput = new EventEmitter<IVehicle>();

  constructor(private fb: FormBuilder) {
    this.vehicleEntryForm = this.fb.group({
      id: [''],
      licenseNumber: ['', Validators.required],
      vehicleType: ['', Validators.required],
      ownerName: ['', Validators.required],
      ownerPhone: ['', Validators.required],
      status: ['', Validators.required],
      ownerAddress: [''],
      entryTime: ['', Validators.required],
      exitTime: [''],
      parkingCharge: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.vehicle) {
      this.vehicleEntryForm.setValue(this.vehicle);
    }
  }

  onSubmit() {
    if (this.vehicleEntryForm.valid) {
      const vehicleData = this.vehicleEntryForm.value;
      this.vehicleFormOutput.emit(vehicleData);
      this.vehicleEntryForm.reset();
    }
  }
}
