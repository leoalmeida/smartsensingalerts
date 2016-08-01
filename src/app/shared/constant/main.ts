import { AuthProviders, AuthMethods } from 'angularfire2/angularfire2';
export const MAIN = {
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
        provider: AuthProviders.Google,
        method: AuthMethods.Popup,
        remember: 'default',
        scope: ['email']
    },
    MAPS_APP_CONFIG: {
        apiKey: 'AIzaSyCCO7zMiZZTav3eDQlD6JnVoEcEVXkodns',
        region: 'BR',
        language: 'pt-BR',
        protocol: 2
    },
    IMAGE_ASSETS_CONFIG: {
        folder: '../../assets/images/',
        backgroundImgPattern: 'profile_header',
        avatarPattern: 'profile_demo_',
        defaultImageType: '.png',
        defaultIconType: '.svg',
        localizationIcon: '../../assets/images/localization.svg',
        elapsedIcon: '../../assets/images/elapsed-time.svg',
        datetimeIcon: '../../assets/images/date-time.svg',
        severityPattern: 'level',
        backImage: '../../assets/images/1200px-São_Carlos_-_Downtown_by_Night.jpg'
    }
};
