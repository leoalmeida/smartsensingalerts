import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';
import 'rxjs/Rx';
import { APP_PROVIDERS } from './app.providers';
import { VENDOR_PROVIDERS } from './providers/index';

declare var ENV: string;

if (ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    VENDOR_PROVIDERS,
    APP_PROVIDERS
]);
