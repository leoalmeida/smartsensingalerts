import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {CONSTANTS} from './shared';
import {NavbarLeftComponent} from './navbar/navbar-left.component';
import {NavbarTopComponent} from './navbar/navbar-top.component';

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
