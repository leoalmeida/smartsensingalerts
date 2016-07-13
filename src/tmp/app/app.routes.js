"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./home/index');
var index_2 = require('./todolist/index');
var index_3 = require('./alerts/index');
var index_4 = require('./subscribers/index');
var index_5 = require('./management/index');
var interfaces_1 = require('./management/interfaces');
exports.routes = index_1.HomeRoutes.concat(index_2.TodolistRoutes, index_3.AlertsRoutes, index_4.SubscriberRoutes, index_5.LoginRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes),
    index_5.AUTH_PROVIDERS,
    interfaces_1.CanDeactivateGuard
];

//# sourceMappingURL=app.routes.js.map
