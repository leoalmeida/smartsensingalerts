import { Component, Input } from '@angular/core';

import {
    MouseEvent,
    GOOGLE_MAPS_DIRECTIVES
} from 'angular2-google-maps/core';
import { FirebaseListObservable } from 'angularfire2';
import { AlertMarker } from '../management/interfaces';
import { MAIN } from '../shared/constant/main';


@Component({
    selector: 'as-maps',
    directives: [GOOGLE_MAPS_DIRECTIVES],
    templateUrl: 'app/utils/gmaps.html',
    })
export class MapsComponent {
    lat: number = -22.0171983; // initial center position for the map
    lng: number = -47.9145567;
    zoom: number = 15; // google maps zoom level
    @Input() alerts: FirebaseListObservable<AlertMarker[]>;


    alertImage(image: string) {
        return MAIN.IMAGE_ASSETS_CONFIG.folder + image;
    }

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`);
    }

    mapClicked($event: MouseEvent) {
        /*this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });*/
    }

    /*markerDragEnd(m: Marker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
    }*/
}
