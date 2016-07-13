import { Component, Input, OnInit }            from '@angular/core';
import { AlertsService }        from './alerts.service';
import { AlertMarker } from '../management/interfaces';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';
import { SysLogger } from '../utils/SysLogger';
import { MAIN } from '../shared/constant/main';
import { FORM_DIRECTIVES } from '@angular/forms';
import { SafeFilter } from './safeimage-pipe.filter';

declare let google: any;

@Component({
    selector: 'as-alertbox',
    templateUrl: 'app/alerts/alertbox.html',
    styleUrls: ['app/alerts/alertbox.css'],
    directives: [GOOGLE_MAPS_DIRECTIVES, FORM_DIRECTIVES],
    providers:  [AlertsService, SysLogger],
    pipes: [SafeFilter]
})
export class AlertBoxComponent implements OnInit {
    @Input() alertinfo:  AlertMarker;
    alertImageIcon: string;
    localizationIcon: string;
    datetimeIcon: string;
    severityIcon: string;
    elapsedIcon: string;
    backgroundImage: string;

    ngOnInit() {
        this.alertImageIcon = MAIN.IMAGE_ASSETS_CONFIG.folder + this.alertinfo.alertImage;
        this.localizationIcon = MAIN.IMAGE_ASSETS_CONFIG.localizationIcon;
        this.datetimeIcon = MAIN.IMAGE_ASSETS_CONFIG.datetimeIcon;
        this.severityIcon =  MAIN.IMAGE_ASSETS_CONFIG.folder +
            MAIN.IMAGE_ASSETS_CONFIG.severityPattern +
            this.alertinfo.severity +
            MAIN.IMAGE_ASSETS_CONFIG.defaultIconType;
        this.elapsedIcon = MAIN.IMAGE_ASSETS_CONFIG.elapsedIcon;
        this.backgroundImage = 'url(' + ( this.alertinfo.backImage === '' ?
                                MAIN.IMAGE_ASSETS_CONFIG.backImage :
                                MAIN.IMAGE_ASSETS_CONFIG.folder + this.alertinfo.backImage) + ')';
    }


}
