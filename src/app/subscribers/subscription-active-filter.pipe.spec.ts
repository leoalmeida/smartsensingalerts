import {ActiveFilterSubscriptionsPipe} from './subscription-active-filter.pipe';
import {Subscription} from './subscription.model';

describe('ActiveFilterSubscriptionsPipe', () => {
    let pipe: ActiveFilterSubscriptionsPipe;

    let subscriptions: Subscription[] = [
        new Subscription(1, '', true),
        new Subscription(2, '', false),
        new Subscription(3, '', true)
    ];

    beforeEach(() => {
        pipe = new ActiveFilterSubscriptionsPipe();
    });

    it('should return only active subscriptions when pass true', () => {
        let result = pipe.transform(subscriptions, true);
        result.forEach(subscription => expect(subscription.isActive).toBeTruthy());
    });

    it('should return all subscriptions when pass false', () => {
        let result = pipe.transform(subscriptions, false);
        expect(result).toEqual(subscriptions);

    });
});
