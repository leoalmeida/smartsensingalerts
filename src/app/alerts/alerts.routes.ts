import { AlertsComponent } from './alerts.component';
import { RouterConfig } from '@angular/router';
import { AlertsListComponent } from './alert-list.component';
import { AlertDetailsComponent } from './alert-details.component';
import { AlertsAdminComponent } from './alert-admin.component';
import { AuthGuard } from '../management/auth.guard';
import { CanDeactivateGuard } from '../management/interfaces';

export const AlertsRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/alertas',
    terminal: true
  },
  {
    path: 'alertas',
    component: AlertsComponent,
    children: [
      {
        path: 'admin',
        component: AlertsAdminComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ':id',
        component: AlertDetailsComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      {
        path: '',
        component: AlertsListComponent
      }
    ]
  }
];
