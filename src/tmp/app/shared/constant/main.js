"use strict";
var angularfire2_1 = require('angularfire2/angularfire2');
exports.MAIN = {
    APP: {
        BRAND: 'Smart Sensing Alerts',
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
        region: 'BR',
        language: 'pt-BR'
    },
    IMAGE_ASSETS_CONFIG: {
        folder: '../../assets/images/',
        defaultIconType: '.svg',
        localizationIcon: '../../assets/images/localization.svg',
        elapsedIcon: '../../assets/images/elapsed-time.svg',
        datetimeIcon: '../../assets/images/date-time.svg',
        severityPattern: 'level',
        backImage: '../../assets/images/1200px-São_Carlos_-_Downtown_by_Night.jpg'
    }
};

//# sourceMappingURL=main.js.map
