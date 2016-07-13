import { FirebaseObjectObservable } from 'angularfire2/angularfire2';
export class Alert {
    public id: number;
    public name: string;
    public alertImage: string;
    public alertType: string;
    public isDone: boolean;

    static clone(alert: Alert): Alert {
        return new Alert(alert.name, alert.isDone, alert.alertImage, alert.alertType);
    }

    constructor(name: string, done = false, img: string, type: string) {
        this.name = name;
        this.isDone = done;
        this.alertImage = img;
        this.alertType = type;
    }

    clear() {
        this.name = '';
        this.isDone = true;
    }
}

export interface AlertMarker {
    // Firebase interface to create a new alert Observable
    newAlert(): FirebaseObjectObservable<Alert> | boolean;
}
