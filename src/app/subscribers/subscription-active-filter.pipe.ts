import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'lodash';
import { Subscription } from '../management/interfaces';

@Pipe({
    name: 'asActiveSubscriptionsFilter'
})
export class ActiveFilterSubscriptionsPipe implements PipeTransform {

    transform(subscriptions: Subscription[], active: Boolean): Subscription[] {
        if (active) {
            return subscriptions;
        }

        return filter(subscriptions, {active});
    }
}
