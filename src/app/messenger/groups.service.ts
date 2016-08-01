/**
 * Created by LeonardoAlmeida on 26/06/16.
 */
import { Injectable } from '@angular/core';
import { Group } from '../management/interfaces';
import { FirebaseListObservable, AngularFire } from 'angularfire2/angularfire2';
import { Subject } from 'rxjs/Subject';

let groupPromise: any;

@Injectable()
export class GroupsService {
    private groupItems: FirebaseListObservable<Group[]>;
    private groupFilter: FirebaseListObservable<Group[]>;
    private group: Group;
    private groupSubject: Subject<string>;

    constructor(af: AngularFire) {
        this.groupItems = af.database.list('groups', {
            query: {
                orderByChild: 'id'
            }
        });

        this.groupSubject = new Subject<string>();

        this.groupFilter = af.database.list('groups', {
            query: {
                orderByChild: 'id',
                equalTo: this.groupSubject,
                limitToFirst: 1
            }
        });

        this.groupFilter.subscribe(queriedItems => {
            console.log(queriedItems);
            this.group = queriedItems[0];
        });
    }

    getGroups() { return this.groupItems; }

    getGroup(key: string) {
        this.groupSubject.next(key);
        groupPromise = Promise.resolve(this.groupItems);

        return groupPromise;
    }

    addGroup(newObject: Group): string {
        let newkey = '';
        if (newObject) {
            newkey = this.groupItems.push(newObject).key();
        }
        return newkey;
    }

    updateGroup(fbkey: string, updatedObject: Group) {
        this.groupItems.update(fbkey, updatedObject);
    }

    removeGroup(fbkey: string) {
        this.groupItems.remove(fbkey);
        // this.alertItems = this.alertItems.filter((alert, index) => index !== alertIndex);
    }

}
