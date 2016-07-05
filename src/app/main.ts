import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {FIREBASE_PROVIDERS, defaultFirebase, firebaseAuthConfig} from 'angularfire2';
import {AppComponent} from './app.component';
import {APP_ROUTER_PROVIDERS} from './app.routes';
import 'rxjs/Rx';
import {GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';
import {MAIN} from './shared/constant/main';
import {provideLazyMapsAPILoaderConfig} from 'angular2-google-maps/core/services/maps-api-loader/lazy-maps-api-loader';
import {SysLogger} from './utils/SysLogger';


declare var ENV: string;

if (ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    SysLogger,
    APP_ROUTER_PROVIDERS,
    FIREBASE_PROVIDERS,
    GOOGLE_MAPS_PROVIDERS,
    defaultFirebase(MAIN.FIREBASE_APP_CONFIG),
    firebaseAuthConfig(MAIN.FIREBASE_APP_AUTH),
    disableDeprecatedForms(),
    provideForms(),
    provideLazyMapsAPILoaderConfig(MAIN.MAPS_APP_CONFIG)
]);
