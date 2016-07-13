import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CONSTANTS, NavbarLeftComponent, NavbarTopComponent } from './shared';

@Component({
    selector: 'as-main-app',
    templateUrl: 'app/app.html',
    directives: [NavbarLeftComponent, NavbarTopComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
    public appBrand: string;
    public navHidden: boolean;

    constructor() {
        this.appBrand = CONSTANTS.MAIN.APP.BRAND;
        this.navHidden = CONSTANTS.MAIN.APP.LEFTNAV;
    }

    menuToggle() {
        this.navHidden = !this.navHidden;
    }
}
