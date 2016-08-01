import { Component } from '@angular/core';
import { User } from '../management/interfaces';

@Component({
    selector: 'as-group-admin',
    templateUrl: 'app/messenger/group-admin.component.html',
    styleUrls: [],
    directives: []
})
export class GroupAdminComponent {
    public user: User;

    public save(form: User, isValid: boolean) {
        console.log(form, isValid);
    }
}
