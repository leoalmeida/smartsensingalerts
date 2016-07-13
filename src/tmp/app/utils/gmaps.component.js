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
var core_2 = require('angular2-google-maps/core');
var angularfire2_1 = require('angularfire2');
var main_1 = require('../shared/constant/main');
var MapsComponent = (function () {
    function MapsComponent() {
        this.lat = -22.0171983; // initial center position for the map
        this.lng = -47.9145567;
        this.zoom = 15; // google maps zoom level
    }
    MapsComponent.prototype.alertImage = function (image) {
        return main_1.MAIN.IMAGE_ASSETS_CONFIG.folder + image;
    };
    MapsComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    MapsComponent.prototype.mapClicked = function ($event) {
        /*this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });*/
    };
    __decorate([
        // google maps zoom level
        core_1.Input(), 
        __metadata('design:type', angularfire2_1.FirebaseListObservable)
    ], MapsComponent.prototype, "alerts", void 0);
    MapsComponent = __decorate([
        core_1.Component({
            selector: 'as-maps',
            directives: [core_2.GOOGLE_MAPS_DIRECTIVES],
            templateUrl: 'app/utils/gmaps.html',
        }), 
        __metadata('design:paramtypes', [])
    ], MapsComponent);
    return MapsComponent;
}());
exports.MapsComponent = MapsComponent;

//# sourceMappingURL=gmaps.component.js.map
