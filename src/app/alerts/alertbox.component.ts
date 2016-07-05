import {Component, Input}            from '@angular/core';
import {AlertsService}        from './alerts.service';
import {AlertMarker} from '../management/interfaces';
import {GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
import {SysLogger} from '../utils/SysLogger';

declare let google: any;

@Component({
    selector: 'as-alertbox',
    templateUrl: 'app/alerts/alertbox.html',
    styleUrls: ['app/alerts/alertbox.css'],
    directives: [GOOGLE_MAPS_DIRECTIVES],
    providers:  [AlertsService, SysLogger]
})
export class AlertBoxComponent {
    @Input() alertinfo:  AlertMarker;
}
