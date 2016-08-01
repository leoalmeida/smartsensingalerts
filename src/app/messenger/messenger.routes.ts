import { MessengerComponent } from './messenger.component';
import { RouterConfig } from '@angular/router';
import { GroupDetailsComponent } from './group-details.component';
import { GroupAdminComponent } from './group-admin.component';
import { GroupListComponent } from './group-list.component';
import { AuthGuard } from '../management/auth.guard';
import { CanDeactivateGuard } from '../management/interfaces';

export const MessengerRoutes: RouterConfig = [
  {
    path: 'messenger',
    component: MessengerComponent,
    children: [
      {
        path: 'admin',
        component: GroupAdminComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ':id',
        component: GroupDetailsComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      {
        path: '',
        component: GroupListComponent
      }
    ]
  }
];
