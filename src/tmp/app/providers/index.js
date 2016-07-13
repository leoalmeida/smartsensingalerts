"use strict";
var form_providers_1 = require('./form.providers');
var main_1 = require('../shared/constant/main');
var angularfire2_1 = require('angularfire2/angularfire2');
var core_1 = require('angular2-google-maps/core');
exports.VENDOR_PROVIDERS = [
    form_providers_1.FORM_PROVIDERS,
    core_1.GOOGLE_MAPS_PROVIDERS,
    core_1.provideLazyMapsAPILoaderConfig(main_1.MAIN.MAPS_APP_CONFIG),
    angularfire2_1.FIREBASE_PROVIDERS,
    angularfire2_1.defaultFirebase(main_1.MAIN.FIREBASE_APP_CONFIG),
    angularfire2_1.firebaseAuthConfig(main_1.MAIN.FIREBASE_APP_AUTH)
];

//# sourceMappingURL=index.js.map
