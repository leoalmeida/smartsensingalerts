import { FirebaseObjectObservable } from 'angularfire2/angularfire2';
import { Localization, Sensor } from '../management/interfaces';

export class Alert {
    public name: string;
    public icon: string;
    public type: string;
    public isActive: boolean;
    public severity: boolean[];
    public label: string;
    public startDate: Date;
    public localization: Localization;
    public sensors: Sensor[];
    public moreInfo: any;

    static clone(alert: Alert): Alert {
        return new Alert(alert.name, alert.icon, alert.type, alert.severity, alert.label,
            alert.startDate, alert.localization, alert.moreInfo, alert.sensors);
    }

    constructor(name: string, icon: string, type: string, severity: boolean[], label: string,
                startDate: Date, localization: Localization, moreInfo: any, sensors: Sensor[]) {
        /*this.name = name;
        this.icon = icon;
        this.type = type;
        this.isActive = active;
        this.severity = severity;
        this.label = label;
        this.startDate = startDate;
        this.localization = localization;
        this.moreInfo = moreInfo;
        this.isDraggable = draggable;
        this.sensors = sensors;*/
    }

    clear() {
        this.name = '';
        this.isActive = true;
    }
}

export interface AlertMarker {
    // Firebase interface to create a new alert Observable
    newAlert(): FirebaseObjectObservable<Alert> | boolean;
}
