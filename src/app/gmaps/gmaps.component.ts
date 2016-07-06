import {Component, Input} from '@angular/core';

import {
    MouseEvent,
    GOOGLE_MAPS_DIRECTIVES
} from 'angular2-google-maps/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {FirebaseListObservable} from 'angularfire2';
import {AlertMarker} from '../management/interfaces';
import {MAIN} from '../shared/constant/main';


@Component({
    selector: 'as-maps',
    directives: [GOOGLE_MAPS_DIRECTIVES, CORE_DIRECTIVES],
    styles: [`
    .sebm-google-map-container {
       height: 85%;
     }
  `],
    template: `
    <sebm-google-map 
      [latitude]="lat"
      [longitude]="lng"
      [zoom]="zoom"
      [disableDefaultUI]="true"
      [zoomControl]="true"
      (mapClick)="mapClicked($event)" id="map">
    
      
      <sebm-google-map-marker *ngFor="let m of (alerts) | async; let i = index"
          (markerClick)="clickedMarker(m.label, i)"
          [latitude]="m.lat"
          [longitude]="m.lng"
          [label]="m.label"
          [markerDraggable]="m.draggable"
          (dragEnd)="markerDragEnd(m, $event)">
          
        <sebm-google-map-info-window>
          <strong>{{m.name}}  ({{m.id}})</strong>
          <h1>Severidade: {{m.severity}}</h1>
          <h2>Ocorrência: {{m.startDate}}</h2>
          <h2>Endereço: {{m.strAddress}}</h2>
          <img class="img-responsive center-block" [src]="alertImage(m.alertImage)" alt="Img" />
        </sebm-google-map-info-window>
        
      </sebm-google-map-marker>
      <sebm-google-map-circle [latitude]="lat" [longitude]="lng" 
          [radius]="600"
          [fillColor]="'red'"
          [circleDraggable]="false"
          [editable]="false">
      </sebm-google-map-circle>

    </sebm-google-map>
`})
export class MapsComponent {
    @Input() alerts: FirebaseListObservable<AlertMarker[]>;
    // google maps zoom level
    zoom: number = 13;

    // initial center position for the map
    lat: number = -22.017000;
    lng: number = -47.912600;

    alertImage(image: string) {
        return MAIN.IMAGE_ASSETS_CONFIG.folder + image;
    }

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
