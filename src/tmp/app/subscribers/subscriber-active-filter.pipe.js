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
var lodash_1 = require('lodash');
var ActiveFilterSubscriberPipe = (function () {
    function ActiveFilterSubscriberPipe() {
    }
    ActiveFilterSubscriberPipe.prototype.transform = function (users, active) {
        if (active) {
            return users;
        }
        return lodash_1.filter(users, { active: active });
    };
    ActiveFilterSubscriberPipe = __decorate([
        core_1.Pipe({
            name: 'asActiveSubscriberFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], ActiveFilterSubscriberPipe);
    return ActiveFilterSubscriberPipe;
}());
exports.ActiveFilterSubscriberPipe = ActiveFilterSubscriberPipe;

//# sourceMappingURL=subscriber-active-filter.pipe.js.map
