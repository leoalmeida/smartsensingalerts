"use strict";
var angularfire2_1 = require('angularfire2/angularfire2');
exports.MAIN = {
    APP: {
        BRAND: 'Angular 2 Starter',
        LEFTNAV: true
    },
    FIREBASE_APP_CONFIG: {
        apiKey: 'AIzaSyCCO7zMiZZTav3eDQlD6JnVoEcEVXkodns',
        authDomain: 'guifragmentos.firebaseapp.com',
        databaseURL: 'https://guifragmentos.firebaseio.com',
        storageBucket: 'guifragmentos.appspot.com',
    },
    FIREBASE_APP_AUTH: {
        provider: angularfire2_1.AuthProviders.Google,
        method: angularfire2_1.AuthMethods.Popup,
        remember: 'default',
        scope: ['email']
    },
    MAPS_APP_CONFIG: {
        apiKey: 'AIzaSyCCO7zMiZZTav3eDQlD6JnVoEcEVXkodns',
        language: 'pt-BR'
    }
};

//# sourceMappingURL=main.js.map
