import { provideRouter, RouterConfig } from '@angular/router';

import {HomeRoutes} from './home/home.routes';
import {TodolistRoutes} from './todolist/todolist.routes';
import {AlertsRoutes} from './alerts/alerts.routes';
import {SubscriberRoutes} from './subscribers/subscriber.routes';
import {AUTH_PROVIDERS, LoginRoutes} from './management/login.routes';
import {CanDeactivateGuard} from './management/interfaces';

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
