import { Subscription } from './subscription.model';
export class Subscriber {
    public id: number;
    public name: string;
    public avatar: string;
    public isActive: boolean;
    public profile: string;
    public geo: string;
    public subscriptions: Subscription[];


    static clone(subscriber: Subscriber): Subscriber {
        return new Subscriber(subscriber.id,
                                subscriber.name,
                                subscriber.avatar,
                                subscriber.profile,
                                subscriber.geo,
                                subscriber.isActive,
                                subscriber.subscriptions);
    }

    constructor(id: number, name: string, avatar: string, profile: string, geo: string, isActive = true, subscriptions: Subscription[]) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.profile = profile;
        this.geo = geo;
        this.isActive = isActive;
        this.subscriptions = subscriptions;
    }

    clear() {
        this.id = 0;
        this.name = '';
        this.avatar = '';
        this.profile = '';
        this.geo = '';
        this.isActive = false;
        this.subscriptions = [];
    }
}
