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
var common_1 = require('@angular/common');
var angularfire2_1 = require('angularfire2');
var main_1 = require('../shared/constant/main');
var MapsComponent = (function () {
    function MapsComponent() {
        // google maps zoom level
        this.zoom = 13;
        // initial center position for the map
        this.lat = -22.017000;
        this.lng = -47.912600;
    }
    MapsComponent.prototype.alertImage = function (image) {
        return main_1.MAIN.IMAGE_ASSETS_CONFIG.folder + image;
    };
    /*markers: Marker[] = [
        {
            lat: -21.978352,
            lng: -47.88399,
            label: 'A',
            title: 'Alagamento',
            draggable: false
        },
        {
            lat: -21.979535,
            lng: -47.8854545,
            label: 'B',
            title: 'Alagamento',
            draggable: false
        },
        {
            lat: -21.9809166,
            lng: -47.8827958,
            label: 'C',
            title: 'Alagamento',
            draggable: false
        }
        -21.9789615,-47.8824688
    ];*/
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
        core_1.Input(), 
        __metadata('design:type', angularfire2_1.FirebaseListObservable)
    ], MapsComponent.prototype, "alerts", void 0);
    MapsComponent = __decorate([
        core_1.Component({
            selector: 'as-maps',
            directives: [core_2.GOOGLE_MAPS_DIRECTIVES, common_1.CORE_DIRECTIVES],
            styles: ["\n    .sebm-google-map-container {\n       height: 20em;\n     }\n  "],
            template: "\n    <sebm-google-map \n      [latitude]=\"lat\"\n      [longitude]=\"lng\"\n      [zoom]=\"zoom\"\n      [disableDefaultUI]=\"true\"\n      [zoomControl]=\"true\"\n      (mapClick)=\"mapClicked($event)\" id=\"map\">\n    \n      \n      <sebm-google-map-marker *ngFor=\"let m of (alerts) | async; let i = index\"\n          (markerClick)=\"clickedMarker(m.label, i)\"\n          [latitude]=\"m.lat\"\n          [longitude]=\"m.lng\"\n          [label]=\"m.label\"\n          [markerDraggable]=\"m.draggable\"\n          (dragEnd)=\"markerDragEnd(m, $event)\">\n          \n        <sebm-google-map-info-window>\n          <strong>{{m.name}}  ({{m.id}})</strong>\n          <h1>Severidade: {{m.severity}}</h1>\n          <h2>Ocorr\u00EAncia: {{m.startDate}}</h2>\n          <h2>Endere\u00E7o: {{m.strAddress}}</h2>\n          <img class=\"img-responsive center-block\" [src]=\"alertImage(m.alertImage)\" alt=\"Img\" />\n        </sebm-google-map-info-window>\n        \n      </sebm-google-map-marker>\n      <sebm-google-map-circle [latitude]=\"lat\" [longitude]=\"lng\" \n          [radius]=\"600\"\n          [fillColor]=\"'red'\"\n          [circleDraggable]=\"false\"\n          [editable]=\"false\">\n      </sebm-google-map-circle>\n\n    </sebm-google-map>\n" }), 
        __metadata('design:paramtypes', [])
    ], MapsComponent);
    return MapsComponent;
}());
exports.MapsComponent = MapsComponent;

//# sourceMappingURL=gmaps.component.js.map
