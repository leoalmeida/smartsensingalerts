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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var NavbarLeftComponent = (function () {
    function NavbarLeftComponent() {
        this.togglePanel = false;
    }
    NavbarLeftComponent.prototype.toggle = function () {
        this.togglePanel = !this.togglePanel;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NavbarLeftComponent.prototype, "brand", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NavbarLeftComponent.prototype, "isHidden", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NavbarLeftComponent.prototype, "togglePanel", void 0);
    NavbarLeftComponent = __decorate([
        core_1.Component({
            selector: 'as-navbar-left',
            templateUrl: 'app/shared/navbar/navbar-left.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarLeftComponent);
    return NavbarLeftComponent;
}());
exports.NavbarLeftComponent = NavbarLeftComponent;

//# sourceMappingURL=navbar-left.component.js.map
