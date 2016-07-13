import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'as-navbar-left',
    templateUrl: 'app/shared/navbar/navbar-left.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})
export class NavbarLeftComponent {
    @Input() brand: string;
    @Input() isHidden: boolean;
    @Input() togglePanel: boolean;

    constructor() {
        this.togglePanel = false;
    }

    toggle() {
        this.togglePanel = !this.togglePanel;
    }

}
