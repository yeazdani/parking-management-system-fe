import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },
  {
    path: 'parking-entry',
    loadComponent: () => import('./pages/parking-entry/parking-entry.component').then((m) => m.ParkingEntryComponent),
  },
  {
    path: 'parking-list',
    loadComponent: () => import('./pages/parking-list/parking-list.component').then((m) => m.ParkingListComponent),
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings.component').then((m) => m.SettingsComponent),
  },
];
