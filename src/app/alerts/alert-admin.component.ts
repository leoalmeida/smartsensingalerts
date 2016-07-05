import { Component } from '@angular/core';

@Component({
    selector: 'as-alert-form',
    templateUrl: 'app/alerts/alert-admin.html',
    styleUrls: [],
    directives: []
})
export class AlertsAdminComponent {
    public user: Alert = {
        name: 'Leo',
        address: {
            address1: '11, High Street',
            postcode: '1234'
        }
    };

    public save(form: Alert, isValid: boolean) {
        console.log(form, isValid);
    }
}

export interface Alert {
    name: string;
    address?: {
        address1?: string;
        postcode?: string;
    };
}
