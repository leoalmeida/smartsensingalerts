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
var AlertsService = (function () {
    // private dbname = 'alerts';
    function AlertsService(af) {
        this.alertItems = af.database.list('/alerts');
    }
    AlertsService.prototype.getAlerts = function () { return this.alertItems; };
    AlertsService.prototype.getAlert = function (key) {
        // return this.af.database. alertItems.filter(alert => alert.key === key)[0];
        this.alertItems._ref.orderByChild('key')
            .equalTo(key)
            .on('child_added', function (snapshot) {
            console.log(snapshot.key);
        });
        return this.alertItems[0];
    };
    AlertsService.prototype.addAlert = function (newObject) {
        var newkey = -1;
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
