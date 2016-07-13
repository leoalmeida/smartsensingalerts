/**
 * Created by LeonardoAlmeida on 26/06/16.
 */
import { Injectable } from '@angular/core';
import { AlertMarker } from '../management/interfaces';
import { FirebaseListObservable, AngularFire } from 'angularfire2/angularfire2';


@Injectable()
export class AlertsService {
    private alertItems: FirebaseListObservable<AlertMarker[]>;
    // private dbname = 'alerts';

    constructor(af: AngularFire) {
        this.alertItems = af.database.list('/alerts');
    }

    getAlerts() { return this.alertItems; }

    getAlert(key: number | string): AlertMarker {
        // return this.af.database. alertItems.filter(alert => alert.key === key)[0];
        this.alertItems._ref.orderByChild('key')
            .equalTo(key)
            .on('child_added', function (snapshot) {
                console.log(snapshot.key);
            });

        return this.alertItems[0];
    }

    addAlert(newObject: AlertMarker): number {
        let newkey = -1;
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
