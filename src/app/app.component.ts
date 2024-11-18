import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { AppState } from './store';
import { select, Store } from '@ngrx/store';
import { browserReloadAction } from './store/vehicle/vehicle.action';
import { Subscription } from 'rxjs';
import { navigation } from './navigation/navigation';
import { selectCurrentRoute } from './store/route/router.selector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'MPS';
  currentPage: string | undefined = 'Dashboard';
  navigation = navigation;

  private subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(browserReloadAction());
    // Handle navigation current item selected and current page
    this.subscription.add(
      this.store.select(selectCurrentRoute).subscribe((currentRouteState) => {
        this.navigation = this.navigation.map((item) => {
          if (item.url === currentRouteState?.url) {
            this.currentPage = item?.name;
          }
          return { ...item, isActive: item.url === currentRouteState?.url };
        });
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
