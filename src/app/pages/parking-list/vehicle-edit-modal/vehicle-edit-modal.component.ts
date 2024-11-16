import { Component, inject } from '@angular/core';
import { VehicleEntryFormComponent } from '../../../shared/components/vehicle-entry-form/vehicle-entry-form.component';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { IVehicle } from '../../../shared/interface/vehicle.interface';

@Component({
  selector: 'app-vehicle-edit-modal',
  standalone: true,
  imports: [VehicleEntryFormComponent, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose],
  templateUrl: './vehicle-edit-modal.component.html',
  styleUrl: './vehicle-edit-modal.component.scss',
})
export class VehicleEditModalComponent {
  readonly dialogRef = inject(MatDialogRef<VehicleEditModalComponent>);
  readonly data = inject<IVehicle>(MAT_DIALOG_DATA);

  constructor() {}

  ngOnInit(): void {
    console.log('MOdal data :', this.data);
  }
}
