import {ActiveFilterSubscriberPipe} from './subscriber-active-filter.pipe';
import { Alert } from './alert.model';
import {Subscription} from "./subscription.model";
import {Subscriber} from "./subscriber.model";

describe('ActiveFilterSubscriberPipe', () => {
    let pipe: ActiveFilterSubscriberPipe;
    let subscribers: Subscriber[] = [
        new Subscriber(1,'Leonardo','/assets/images/profile_demo_2.png','/leonardo','@-21.9833256,-47.8996836,15z?hl=pt-BR', true),
        new Subscriber(2,'Thais','/assets/images/profile_demo_3.png','/thais','@-21.9833256,-47.8996836,15z?hl=pt-BR', false),
        new Subscriber(3,'Sandra','/assets/images/profile_demo_4.png','/sandra','@-21.9833256,-47.8996836,15z?hl=pt-BR', true)
    ];

    let subscriptions: Subscription[] = [
        new Subscription(1,"", true),
        new Subscription(2,"", false),
        new Subscription(3,"", true)
    ];

    beforeEach(() => {
        pipe = new ActiveFilterPipe();
    });

    it('should return only active subscribers when pass true', () => {
        let result = pipe.transform(subscribers, true);
        result.forEach(subscriber => expect(subscriber.isActive).toBeTruthy());
    });

    it('should return all subscribers when pass false', () => {
        let result = pipe.transform(subscribers, false);
        expect(result).toEqual(subscribers);
    });

});
