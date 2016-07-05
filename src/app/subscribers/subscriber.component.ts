/**
 * Created by LeonardoAlmeida on 22/06/16.
 */
import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {ActiveFilterSubscriberPipe} from './subscriber-active-filter.pipe';

@Component({
    selector: 'as-subscriber-info',
    templateUrl: 'app/subscribers/subscriber.component.html',
    styleUrls: [
        'app/subscribers/subscriber.component.css'
    ],
    directives: [],
    pipes: [ActiveFilterSubscriberPipe]
})
export class SubscriberComponent {
    public subscriber: any;
    private subscribers: FirebaseListObservable<any[]>;
    private showActive: Boolean;

    // private newSubKey: string;
    // private dbname = 'subscribers';

    constructor(af: AngularFire) {
        this.subscriber = {
            id: 1,
            name: 'Leonardo',
            avatar: '/assets/images/profile_demo_2.png',
            profile: '/leonardo',
            lat: '-21.9833256',
            lng: '-47.8996836',
            isActive: true,
            subscriptions: [
                {id: 1, rules: '', isActive: true},
                {id: 2, rules: '', isActive: false},
                {id: 3, rules: '', isActive: true}
            ]};
        this.subscribers = af.database.list('/subscribers');
        this.showActive = true;
    }

/*
    addSubscriber() {
        this.newSubKey = this.subscribers.push(Subscriber.clone(this.subscriber)).key();
        // let updates = {};
        // updates['/' + this.dbname + '/' + newSubKey] = Subscriber.clone(this.subscriber);
        // this.dbconn().ref().update(updates);

        this.subscriber.clear();
    }

    updateAlert(key: string, newObject: Subscriber) {
        this.subscribers.update(key, newObject);
    }

    delSubscriber(key: string) {
        this.subscribers.remove(key);

        // this.subscriberItems = this.subscriberItems.filter(
         //   (subscriber, index) => index !== subscriberIndex);
    }*/
}
