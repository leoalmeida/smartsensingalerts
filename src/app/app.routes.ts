import { provideRouter, RouterConfig } from '@angular/router';

import { HomeRoutes }  from './home/index';
import { TodolistRoutes }  from './todolist/index';
import { AlertsRoutes }  from './alerts/index';
import { SubscriberRoutes }  from './subscribers/index';
import { AUTH_PROVIDERS, LoginRoutes }  from './management/index';
import { CanDeactivateGuard }  from './management/interfaces';

export const routes: RouterConfig = [
    ...HomeRoutes,
    ...TodolistRoutes,
    ...AlertsRoutes,
    ...SubscriberRoutes,
    ...LoginRoutes
];


export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    AUTH_PROVIDERS,
    CanDeactivateGuard
];
