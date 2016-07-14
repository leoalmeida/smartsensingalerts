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
var dialog_service_1 = require('../dialog.service');
var Rx_1 = require('rxjs/Rx');
var SysLogger_1 = require('../utils/SysLogger');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var AlertDetailsComponent = (function () {
    function AlertDetailsComponent(dialogService) {
        this.dialogService = dialogService;
        var datePipe = new common_1.DatePipe();
        var datenow = datePipe.transform(new Date(), 'short');
        SysLogger_1.SysLogger.log(datenow);
    }
    AlertDetailsComponent.prototype.canDeactivate = function () {
        // Allow synchronous navigation (`true`) if no alert or the alert is unchanged
        if (!this.formAlert) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        var p = this.dialogService.confirm('Descartar mudanças?');
        var o = Rx_1.Observable.fromPromise(p);
        return o;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AlertDetailsComponent.prototype, "formAlert", void 0);
    AlertDetailsComponent = __decorate([
        core_1.Component({
            selector: 'as-alert-details',
            templateUrl: 'app/alerts/alert-details.html',
            styleUrls: ['input {width: 20em}'],
            providers: [SysLogger_1.SysLogger, dialog_service_1.DialogService],
            directives: [forms_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [dialog_service_1.DialogService])
    ], AlertDetailsComponent);
    return AlertDetailsComponent;
}());
exports.AlertDetailsComponent = AlertDetailsComponent;

//# sourceMappingURL=alert-details.component.js.map
