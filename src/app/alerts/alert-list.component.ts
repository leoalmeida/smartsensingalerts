
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { CompletedAlertsFilterPipe } from './completed-alerts-filter.pipe';
import { MapsComponent } from '../utils/gmaps.component';
import { AlertMarker } from '../management/interfaces';
import { AlertsService } from './alerts.service';
import { Router } from '@angular/router';
import { AlertBoxComponent } from './alertbox.component';

@Component({
    selector: 'as-alert-list',
    templateUrl: 'app/alerts/alert-list.html',
    styleUrls: ['app/alerts/alerts.css'],
    directives: [MapsComponent, AlertBoxComponent],
    pipes: [CompletedAlertsFilterPipe]
})
export class AlertsListComponent implements OnInit, OnDestroy {
    private alertItems: FirebaseListObservable<AlertMarker[]>;
    private showCompleted: Boolean;
    private showPanel: Boolean;

    private selectedKey: number;
    private sub: any;

    constructor( private service: AlertsService,
                 private router: Router) {
        this.showCompleted = true;
        this.showPanel = true;
    }

    isSelected(alert: AlertMarker) { return alert.id === this.selectedKey; }

    ngOnInit() {
        this.sub = this.router
            .routerState
            .queryParams
            .subscribe(params => {
                this.selectedKey = +params['id'];
                this.alertItems = this.service.getAlerts();
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onSelect(id: number) {
        this.router.navigate(['/alertas', id]);
    }

    /*addAlert() {
        this.selectedKey = service.addAlert(Alert.clone(this.alert));
        this.alert.clear();
    }

    updateAlert(key: string, newObject: Alert) {
        service.updateAlert(key, newObject);
    }

    delAlert(key: string) {
        service.removeAlert(key);
    }*/
}
