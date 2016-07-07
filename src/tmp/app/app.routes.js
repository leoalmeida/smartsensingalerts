"use strict";
var router_1 = require('@angular/router');
var home_routes_1 = require('./home/home.routes');
var todolist_routes_1 = require('./todolist/todolist.routes');
var alerts_routes_1 = require('./alerts/alerts.routes');
var subscriber_routes_1 = require('./subscribers/subscriber.routes');
var login_routes_1 = require('./management/login.routes');
var interfaces_1 = require('./management/interfaces');
exports.routes = home_routes_1.HomeRoutes.concat(todolist_routes_1.TodolistRoutes, alerts_routes_1.AlertsRoutes, subscriber_routes_1.SubscriberRoutes, login_routes_1.LoginRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes),
    login_routes_1.AUTH_PROVIDERS,
    interfaces_1.CanDeactivateGuard
];

//# sourceMappingURL=app.routes.js.map
