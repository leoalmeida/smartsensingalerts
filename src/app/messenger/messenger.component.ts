import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { GroupsService } from './groups.service';
@Component({
    templateUrl: 'app/messenger/messenger.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers:  [GroupsService]
})
export class MessengerComponent { }
