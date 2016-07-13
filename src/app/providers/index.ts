import { FORM_PROVIDERS } from './form.providers';
import { MAIN } from '../shared/constant/main';
import { FIREBASE_PROVIDERS, defaultFirebase, firebaseAuthConfig } from 'angularfire2/angularfire2';
import { GOOGLE_MAPS_PROVIDERS, provideLazyMapsAPILoaderConfig } from 'angular2-google-maps/core';

export const VENDOR_PROVIDERS = [
    FORM_PROVIDERS,
    GOOGLE_MAPS_PROVIDERS,
    provideLazyMapsAPILoaderConfig(MAIN.MAPS_APP_CONFIG),
    FIREBASE_PROVIDERS,
    defaultFirebase(MAIN.FIREBASE_APP_CONFIG),
    firebaseAuthConfig(MAIN.FIREBASE_APP_AUTH)
];
