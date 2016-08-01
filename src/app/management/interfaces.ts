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

export interface Localization {
    address: string;
    image: string;
    latitude: number;
    longitude: number;
}

export interface Configuration {
    controller: string;
    defaultUnit: string;
    pin: string;
}

export interface Measure {
    average: number;
    date: string;
    readings: number;
    unit: string;
    value: number;
}

export interface Sensor {
    collectedData: Measure[];
    configuration: Configuration;
    icon: string;
    isActive: boolean;
    label: string;
    localization: Localization;
    name: string;
    type: string;
}

export interface AlertMarker {
    name: string;
    icon: string;
    type: string;
    severity: boolean[];
    label: string;
    sensors: Sensor[];
    startDate: string;
    releaseDate?: string;
    lastUpdates?: Measure[];
    localization?: Localization;
    isActive?: boolean;
    isDraggable?: boolean;
    moreInfo?: any;
}

export interface Subscription {
    id: number;
    rules: string;
    isActive?: boolean;
    subscriptionDate: string;
}

export interface MarkerLabel {
    color: string;
    text: string;
}

export interface User {
    id: number;
    name: string;
    status: number;
    email: string;
    mood: string;
    bio: string;
    localization: {
        lastPosition: Localization;
        mainPosition: Localization;
    };
    avatar?: number;
    theme?: number;
    subscriptions?: Subscription[];
}

export interface GeneratedToken {
    email: string;
    generatedToken: string;
    status: number;
};

export interface Message {
    msg: string;
    receivedDate: string;
    sendDate: string;
    sender: number;
    status: number;
};

export interface Group {
    id: number;
    name: string;
    subject: string;
    description: string;
    icon: number;
    background: number;
    securityLevel:   number;
    status: number;
    members: User[];
    messages: Message[];
    generatedTokens: GeneratedToken[];
};
