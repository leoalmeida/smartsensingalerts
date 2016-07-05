"use strict";
var router_1 = require('@angular/router');
var home_routes_1 = require('./home/home.routes');
var todolist_routes_1 = require('./todolist/todolist.routes');
var simplebind_routes_1 = require('./simplebind/simplebind.routes');
var routes = home_routes_1.HomeRoutes.concat(todolist_routes_1.TodolistRoutes, simplebind_routes_1.SimplebindRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map