import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'lodash';
import { AlertMarker } from '../management/interfaces';

@Pipe({
    name: 'asCompletedAlertsFilter'
})
export class CompletedAlertsFilterPipe implements PipeTransform {
    transform(alerts: AlertMarker[], active: Boolean): AlertMarker[] {
        if (active) {
            return alerts;
        }

        return filter(alerts, {active});
    }
}

@Pipe({
    name: 'asReverseArray'
})
export class ReversePipe implements PipeTransform {
    transform(value: AlertMarker[]): AlertMarker[] {
        return value.slice().reverse();
    }
}
