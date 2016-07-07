import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertMarker } from '../management/interfaces';
import { AlertsService } from './alerts.service';
import {DialogService} from '../dialog.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {SysLogger} from '../utils/SysLogger';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'as-alert-details',
    templateUrl: 'app/alerts/alert-details.html',
    styleUrls: ['input {width: 20em}'],
    providers: [SysLogger],
    directives: []
})
export class AlertDetailsComponent implements OnInit, OnDestroy {
    private editName: string;
    private sub: any;
    private formAlert: AlertMarker = {
        id: 0,
        name: 'Enchente',
        alertImage: 'flood.svg',
        severity: 2,
        isActive: false,
        startDate: '',
        releaseDate: '',
        lat: -21.975086,
        lng: -47.901249,
        label: 'N',
        draggable: false,
        icon: 'fa-tint',
        routeLink: '/enchentes',
        strAddress: ''
    };

    constructor( private service: AlertsService,
                 private route: ActivatedRoute,
                 private router: Router,
                 private dialogService: DialogService) {
        let datePipe = new DatePipe();
        let datenow = datePipe.transform(new Date(), 'short');
        SysLogger.log(datenow);
        this.formAlert.startDate = datenow;
    }


    ngOnInit() {
        this.sub = this.route
            .params
            .subscribe(params => {
                let key = +params['key'];
                let alert = this.service.getAlert(key);
                if (alert) {
                    this.editName = alert.name;
                    this.formAlert = alert;
                } else { // id not found
                    this.gotoAlertlist();
                }
            });
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    cancel() {
        this.gotoAlertlist();
    }

    save() {
        this.formAlert.name = this.editName;
        this.gotoAlertlist();
    }

    canDeactivate(): Observable<boolean> | boolean {
        // Allow synchronous navigation (`true`) if no alert or the alert is unchanged
        if (!this.formAlert || this.formAlert.name === this.editName) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        let p = this.dialogService.confirm('Descartar mudanças?');
        let o = Observable.fromPromise(p);
        return o;
    }

    gotoAlertlist() {
        let alertKey = this.formAlert ? this.formAlert.id : null;
        // Pass along the alert id if available
        // so that the Alert list component can select that alert.
        // Add a totally useless `foo` parameter for kicks.
        // Absolute link
        this.router.navigate(['/alertas', {key: alertKey}]);
    }

}
