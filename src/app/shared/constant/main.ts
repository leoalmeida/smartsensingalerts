import {AuthProviders, AuthMethods} from 'angularfire2/angularfire2';
export const MAIN = {
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
        provider: AuthProviders.Google,
        method: AuthMethods.Popup,
        remember: 'default',
        scope: ['email']
    },
    MAPS_APP_CONFIG: {
        apiKey: 'AIzaSyCCO7zMiZZTav3eDQlD6JnVoEcEVXkodns',
        language: 'pt-BR'
    }
};
