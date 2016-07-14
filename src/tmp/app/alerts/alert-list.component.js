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
var completed_alerts_filter_pipe_1 = require('./completed-alerts-filter.pipe');
var gmaps_component_1 = require('../utils/gmaps.component');
var alerts_service_1 = require('./alerts.service');
var router_1 = require('@angular/router');
var alertbox_component_1 = require('./alertbox.component');
var AlertsListComponent = (function () {
    function AlertsListComponent(service, router) {
        this.service = service;
        this.router = router;
        this.showCompleted = true;
        this.showPanel = true;
    }
    AlertsListComponent.prototype.isSelected = function (key) { return key === this.selectedKey; };
    AlertsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.router
            .routerState
            .queryParams
            .subscribe(function (params) {
            _this.selectedKey = params['key'];
            _this.alertItems = _this.service.getAlerts();
        });
    };
    AlertsListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    AlertsListComponent.prototype.onSelect = function (key) {
        this.router.navigate(['/alertas', key]);
    };
    AlertsListComponent = __decorate([
        core_1.Component({
            selector: 'as-alert-list',
            templateUrl: 'app/alerts/alert-list.html',
            styleUrls: ['app/alerts/alerts.css'],
            directives: [gmaps_component_1.MapsComponent, alertbox_component_1.AlertBoxComponent],
            pipes: [completed_alerts_filter_pipe_1.CompletedAlertsFilterPipe, completed_alerts_filter_pipe_1.ReversePipe]
        }), 
        __metadata('design:paramtypes', [alerts_service_1.AlertsService, router_1.Router])
    ], AlertsListComponent);
    return AlertsListComponent;
}());
exports.AlertsListComponent = AlertsListComponent;

//# sourceMappingURL=alert-list.component.js.map
