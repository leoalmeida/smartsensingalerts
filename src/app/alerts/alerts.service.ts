/**
 * Created by LeonardoAlmeida on 26/06/16.
 */
import { Injectable } from '@angular/core';
import { AlertMarker } from '../management/interfaces';
import { FirebaseListObservable, AngularFire } from 'angularfire2/angularfire2';
import { Subject } from 'rxjs/Subject';

let alertPromise: any;

@Injectable()
export class AlertsService {
    private alertItems: FirebaseListObservable<AlertMarker[]>;
    private alertFilter: FirebaseListObservable<AlertMarker[]>;
    private alert: AlertMarker;
    private alertSubject: Subject<string>;

    constructor(af: AngularFire) {
        this.alertItems = af.database.list('alerts', {
            query: {
                orderByChild: 'severity'
            }
        });

        this.alertSubject = new Subject<string>();

        this.alertFilter = af.database.list('alerts', {
            query: {
                orderByChild: 'id',
                equalTo: this.alertSubject,
                limitToFirst: 1
            }
        });

        this.alertFilter.subscribe(queriedItems => {
            console.log(queriedItems);
            this.alert = queriedItems[0];
        });
    }

    getAlerts() { return this.alertItems; }

    getAlert(key: string) {
        this.alertSubject.next(key);
        alertPromise = Promise.resolve(this.alertItems);

        return alertPromise;
    }

    addAlert(newObject: AlertMarker): string {
        let newkey = '';
        if (newObject) {
            newkey = this.alertItems.push(newObject).key();
        }
        return newkey;
    }

    updateAlert(fbkey: string, updatedObject: AlertMarker) {
        this.alertItems.update(fbkey, updatedObject);
    }

    removeAlert(fbkey: string) {
        this.alertItems.remove(fbkey);
        // this.alertItems = this.alertItems.filter((alert, index) => index !== alertIndex);
    }

}
