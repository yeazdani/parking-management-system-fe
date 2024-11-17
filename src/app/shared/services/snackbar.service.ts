import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor() {}

  private snackBar = inject(MatSnackBar);

  durationInSeconds = 2;

  openSnackBar(message: string) {
    this.snackBar.open(message, 'close', {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
