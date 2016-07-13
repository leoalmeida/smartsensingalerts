import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'lodash';
import { Subscriber } from '../management/interfaces';

@Pipe({
    name: 'asActiveSubscriberFilter'
})
export class ActiveFilterSubscriberPipe implements PipeTransform {
    transform(subscribers: Subscriber[], active: Boolean): Subscriber[] {
        if (active) {
            return subscribers;
        }

        return filter(subscribers, {active});
    }
}
