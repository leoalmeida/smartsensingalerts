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
 * Created by LeonardoAlmeida on 26/06/16.
 */
var core_1 = require('@angular/core');
var angularfire2_1 = require('angularfire2/angularfire2');
var Subject_1 = require('rxjs/Subject');
var alertPromise;
var AlertsService = (function () {
    function AlertsService(af) {
        var _this = this;
        this.alertItems = af.database.list('alerts', {
            query: {
                orderByChild: 'severity'
            }
        });
        this.alertSubject = new Subject_1.Subject();
        this.alertFilter = af.database.list('alerts', {
            query: {
                orderByChild: 'id',
                equalTo: this.alertSubject,
                limitToFirst: 1
            }
        });
        this.alertFilter.subscribe(function (queriedItems) {
            console.log(queriedItems);
            _this.alert = queriedItems[0];
        });
    }
    AlertsService.prototype.getAlerts = function () { return this.alertItems; };
    AlertsService.prototype.getAlert = function (key) {
        this.alertSubject.next(key);
        alertPromise = Promise.resolve(this.alertItems);
        return alertPromise;
    };
    AlertsService.prototype.addAlert = function (newObject) {
        var newkey = '';
        if (newObject) {
            newkey = this.alertItems.push(newObject).key();
        }
        return newkey;
    };
    AlertsService.prototype.updateAlert = function (fbkey, updatedObject) {
        this.alertItems.update(fbkey, updatedObject);
    };
    AlertsService.prototype.removeAlert = function (fbkey) {
        this.alertItems.remove(fbkey);
        // this.alertItems = this.alertItems.filter((alert, index) => index !== alertIndex);
    };
    AlertsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], AlertsService);
    return AlertsService;
}());
exports.AlertsService = AlertsService;

//# sourceMappingURL=alerts.service.js.map
