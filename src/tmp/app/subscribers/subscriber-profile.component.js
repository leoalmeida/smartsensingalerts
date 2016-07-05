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
var core_1 = require('@angular/core');
var SubscriberProfileComponent = (function () {
    function SubscriberProfileComponent() {
        this.user = {
            name: 'Leo',
            address: {
                address1: '11, High Street',
                postcode: '1234'
            }
        };
    }
    SubscriberProfileComponent.prototype.save = function (form, isValid) {
        console.log(form, isValid);
    };
    SubscriberProfileComponent = __decorate([
        core_1.Component({
            selector: 'as-subscriber-form',
            templateUrl: 'app/management/mngmnt.html',
            styleUrls: [],
            directives: []
        }), 
        __metadata('design:paramtypes', [])
    ], SubscriberProfileComponent);
    return SubscriberProfileComponent;
}());
exports.SubscriberProfileComponent = SubscriberProfileComponent;

//# sourceMappingURL=subscriber-profile.component.js.map
