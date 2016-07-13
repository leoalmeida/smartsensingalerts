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
var dialog_service_1 = require('../dialog.service');
var router_1 = require('@angular/router');
var Rx_1 = require('rxjs/Rx');
var SysLogger_1 = require('../utils/SysLogger');
var common_1 = require('@angular/common');
var AlertDetailsComponent = (function () {
    function AlertDetailsComponent(service, route, router, dialogService) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.dialogService = dialogService;
        this.formAlert = {
            id: 0,
            name: 'Enchente',
            alertImage: 'flood.svg',
            severity: 2,
            isActive: false,
            startDate: '',
            releaseDate: '',
            lat: -21.975086,
            lng: -47.901249,
            label: 'N',
            draggable: false,
            icon: 'fa-tint',
            routeLink: '/enchentes',
            strAddress: ''
        };
        var datePipe = new common_1.DatePipe();
        var datenow = datePipe.transform(new Date(), 'short');
        SysLogger_1.SysLogger.log(datenow);
        this.formAlert.startDate = datenow;
    }
    AlertDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.formAlert = _this.service.getAlert(id);
        });
    };
    AlertDetailsComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    AlertDetailsComponent.prototype.cancel = function () {
        this.gotoAlertlist();
    };
    AlertDetailsComponent.prototype.save = function () {
        this.formAlert.name = this.editName;
        this.gotoAlertlist();
    };
    AlertDetailsComponent.prototype.canDeactivate = function () {
        // Allow synchronous navigation (`true`) if no alert or the alert is unchanged
        if (!this.formAlert || this.formAlert.name === this.editName) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        var p = this.dialogService.confirm('Descartar mudanças?');
        var o = Rx_1.Observable.fromPromise(p);
        return o;
    };
    AlertDetailsComponent.prototype.gotoAlertlist = function () {
        var alertKey = this.formAlert ? this.formAlert.id : null;
        // Pass along the alert id if available
        // so that the Alert list component can select that alert.
        // Add a totally useless `foo` parameter for kicks.
        // Absolute link
        this.router.navigate(['/alertas', { queryParams: { id: alertKey } }]);
    };
    AlertDetailsComponent = __decorate([
        core_1.Component({
            selector: 'as-alert-details',
            templateUrl: 'app/alerts/alert-details.html',
            styleUrls: ['input {width: 20em}'],
            providers: [SysLogger_1.SysLogger],
            directives: []
        }), 
        __metadata('design:paramtypes', [alerts_service_1.AlertsService, router_1.ActivatedRoute, router_1.Router, dialog_service_1.DialogService])
    ], AlertDetailsComponent);
    return AlertDetailsComponent;
}());
exports.AlertDetailsComponent = AlertDetailsComponent;

//# sourceMappingURL=alert-details.component.js.map
