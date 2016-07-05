import { Component } from '@angular/core';

@Component({
    selector: 'as-subscriber-form',
    templateUrl: 'app/management/mngmnt.html',
    styleUrls: [],
    directives: []
})
export class SubscriberProfileComponent {
    public user: User = {
        name: 'Leo',
        address: {
            address1: '11, High Street',
            postcode: '1234'
        }
    };

    public save(form: User, isValid: boolean) {
        console.log(form, isValid);
    }
}

export interface User {
    name: string;
    address?: {
        address1?: string;
        postcode?: string;
    };
}
