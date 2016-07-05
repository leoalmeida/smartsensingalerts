import {SubscriberComponent} from './subscriber.component';
import {RouterConfig} from '@angular/router';
import {SubscriberProfileComponent} from './subscriber-profile.component';
import {SubscriberAdminComponent} from './subscriber-admin.component';
import {SubscriberListComponent} from './subscriber-list.component';
import {AuthGuard} from '../management/auth.guard';
import {CanDeactivateGuard} from '../management/interfaces';

export const SubscriberRoutes: RouterConfig = [
  {
    path: 'subscribers',
    component: SubscriberComponent,
    children: [
      {
        path: 'admin',
        component: SubscriberAdminComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ':id',
        component: SubscriberProfileComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      {
        path: '',
        component: SubscriberListComponent
      }
    ]
  }
];
