"use strict";
var subscriber_component_1 = require('./subscriber.component');
var subscriber_profile_component_1 = require('./subscriber-profile.component');
var subscriber_admin_component_1 = require('./subscriber-admin.component');
var subscriber_list_component_1 = require('./subscriber-list.component');
var auth_guard_1 = require('../management/auth.guard');
var interfaces_1 = require('../management/interfaces');
exports.SubscriberRoutes = [
    {
        path: 'subscribers',
        component: subscriber_component_1.SubscriberComponent,
        children: [
            {
                path: 'admin',
                component: subscriber_admin_component_1.SubscriberAdminComponent,
                canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: ':id',
                component: subscriber_profile_component_1.SubscriberProfileComponent,
                canDeactivate: [interfaces_1.CanDeactivateGuard]
            },
            {
                path: '',
                component: subscriber_list_component_1.SubscriberListComponent
            }
        ]
    }
];

//# sourceMappingURL=subscriber.routes.js.map
