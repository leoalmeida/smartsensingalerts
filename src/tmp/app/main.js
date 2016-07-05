"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var angularfire2_1 = require('angularfire2');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
require('rxjs/Rx');
var core_2 = require('angular2-google-maps/core');
var main_1 = require('./shared/constant/main');
var lazy_maps_api_loader_1 = require('angular2-google-maps/core/services/maps-api-loader/lazy-maps-api-loader');
var SysLogger_1 = require('./utils/SysLogger');
if (ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    SysLogger_1.SysLogger,
    app_routes_1.APP_ROUTER_PROVIDERS,
    angularfire2_1.FIREBASE_PROVIDERS,
    core_2.GOOGLE_MAPS_PROVIDERS,
    angularfire2_1.defaultFirebase(main_1.MAIN.FIREBASE_APP_CONFIG),
    angularfire2_1.firebaseAuthConfig(main_1.MAIN.FIREBASE_APP_AUTH),
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    lazy_maps_api_loader_1.provideLazyMapsAPILoaderConfig(main_1.MAIN.MAPS_APP_CONFIG)
]);

//# sourceMappingURL=main.js.map
