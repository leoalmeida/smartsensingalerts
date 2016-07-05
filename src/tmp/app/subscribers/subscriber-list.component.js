"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by LeonardoAlmeida on 22/06/16.
 */
var core_1 = require('@angular/core');
var angularfire2_1 = require('angularfire2');
var subscriber_active_filter_pipe_1 = require('./subscriber-active-filter.pipe');
// import {Subscriber} from '../management/interfaces';
var SubscriberListComponent = (function () {
    // private newSubKey: string;
    // private dbname = 'subscribers';
    function SubscriberListComponent(af) {
        this.subscriber = {
            id: 1,
            name: 'Leonardo',
            avatar: '/assets/images/profile_demo_2.png',
            profile: '/leonardo',
            lat: '-21.9833256',
            lng: '-47.8996836',
            isActive: true,
            subscriptions: [
                { id: 1, rules: '', isActive: true },
                { id: 2, rules: '', isActive: false },
                { id: 3, rules: '', isActive: true }
            ] };
        this.subscribers = af.database.list('/subscribers');
        this.showActive = true;
    }
    SubscriberListComponent = __decorate([
        core_1.Component({
            selector: 'as-subscriber-info',
            templateUrl: 'app/subscribers/subscriber.component.html',
            styleUrls: [
                'app/subscribers/subscriber.component.css'
            ],
            directives: [],
            pipes: [subscriber_active_filter_pipe_1.ActiveFilterSubscriberPipe]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], SubscriberListComponent);
    return SubscriberListComponent;
}());
exports.SubscriberListComponent = SubscriberListComponent;

//# sourceMappingURL=subscriber-list.component.js.map
