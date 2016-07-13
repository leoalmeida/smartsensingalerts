import { Component }            from '@angular/core';
import { ROUTER_DIRECTIVES }    from '@angular/router';

import { AlertsService }        from './alerts.service';

@Component({
    templateUrl: 'app/alerts/alerts.html',
    directives: [ROUTER_DIRECTIVES],
    providers:  [AlertsService]
})
export class AlertsComponent { }
