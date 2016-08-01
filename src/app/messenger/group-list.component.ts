/**
 * Created by LeonardoAlmeida on 22/06/16.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { ActiveFilterGroupsPipe } from './group-active-filter.pipe';
import { Group } from '../management/interfaces';
import { MapsComponent } from '../utils/gmaps.component';
import { GroupBoxComponent } from './groupbox.component';
import { GroupsService } from './groups.service';
import { Router } from '@angular/router';

@Component({
    selector: 'as-group-list',
    templateUrl: 'app/messenger/group-list.component.html',
    styleUrls: [ 'app/messenger/messenger.component.css'],
    directives: [MapsComponent, GroupBoxComponent],
    pipes: [ActiveFilterGroupsPipe]
})
export class GroupListComponent  implements OnInit, OnDestroy {
    public group: any;
    private groups: FirebaseListObservable<Group[]>;
    private showActive: Boolean;
    private showPanel: Boolean;

    private selectedKey: string;
    private sub: any;
    // private newSubKey: string;
    // private dbname = 'groups';

    constructor(private service: GroupsService,
                private router: Router) {
        this.showActive = true;
        this.showPanel = true;
    }

    isSelected(key: string) { return key === this.selectedKey; }

    ngOnInit() {
        this.sub = this.router
            .routerState
            .queryParams
            .subscribe(params => {
                this.selectedKey = params['key'];
                this.groups = this.service.getGroups();
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onSelect(key: string) {
        this.router.navigate(['/Groups', key]);
    }
}
