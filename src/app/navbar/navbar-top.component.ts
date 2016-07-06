import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'as-navbar-top',
    templateUrl: 'app/navbar/navbar-top.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})
export class NavbarTopComponent {
    @Input() brand: string;
    @Input() isHidden: boolean;
    @Input() alerts: number = 3;
}
