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
var alerts_service_1 = require('./alerts.service');
var core_2 = require('angular2-google-maps/core');
var SysLogger_1 = require('../utils/SysLogger');
var AlertBoxComponent = (function () {
    function AlertBoxComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AlertBoxComponent.prototype, "alertinfo", void 0);
    AlertBoxComponent = __decorate([
        core_1.Component({
            selector: 'as-alertbox',
            templateUrl: 'app/alerts/alertbox.html',
            styleUrls: ['app/alerts/alertbox.css'],
            directives: [core_2.GOOGLE_MAPS_DIRECTIVES],
            providers: [alerts_service_1.AlertsService, SysLogger_1.SysLogger]
        }), 
        __metadata('design:paramtypes', [])
    ], AlertBoxComponent);
    return AlertBoxComponent;
}());
exports.AlertBoxComponent = AlertBoxComponent;

//# sourceMappingURL=alertbox.component.js.map
