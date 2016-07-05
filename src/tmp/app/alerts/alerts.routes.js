"use strict";
var alerts_component_1 = require('./alerts.component');
var alert_list_component_1 = require('./alert-list.component');
var alert_details_component_1 = require('./alert-details.component');
var alert_admin_component_1 = require('./alert-admin.component');
var auth_guard_1 = require('../management/auth.guard');
var interfaces_1 = require('../management/interfaces');
exports.AlertsRoutes = [
    {
        path: '',
        redirectTo: '/alertas',
        terminal: true
    },
    {
        path: 'alertas',
        component: alerts_component_1.AlertsComponent,
        children: [
            {
                path: 'admin',
                component: alert_admin_component_1.AlertsAdminComponent,
                canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: ':id',
                component: alert_details_component_1.AlertDetailsComponent,
                canDeactivate: [interfaces_1.CanDeactivateGuard]
            },
            {
                path: '',
                component: alert_list_component_1.AlertsListComponent
            }
        ]
    }
];

//# sourceMappingURL=alerts.routes.js.map
