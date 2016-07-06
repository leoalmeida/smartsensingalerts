import { CanDeactivate } from '@angular/router';
import { Observable }    from 'rxjs/Observable';

export interface CanComponentDeactivate {
    canDeactivate: () => boolean | Observable<boolean>;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate): Observable<boolean> | boolean {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}

export interface AlertMarker {
    alertImage?: string;
    backImage?: string;
    id: number;
    severity: number;
    strAddress?: string;
    isActive?: boolean;
    startDate: string;
    releaseDate?: string;
    lat: number;
    lng: number;
    label: string;
    name?: string;
    draggable?: boolean;
    icon?: string;
    routeLink?: string;
}

export interface Subscription {
    id: number;
    rules: string;
    isActive?: boolean;
}

export interface Subscriber {
    id: number;
    name: string;
    avatar?: string;
    isActive?: boolean;
    profile?: string;
    geo?: string;
    subscriptions?: Subscription[];
}

export interface MarkerLabel {
    color: string;
    text: string;
}

export interface Alert {
    key: number;
    name?: string;
    alertImage?: string;
    alertType: string;
    isDone?: boolean;
}
