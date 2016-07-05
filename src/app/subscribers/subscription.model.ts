export class Subscription {
    public id: number;
    public rules: string;
    public isActive: boolean;

    static clone(subscription: Subscription): Subscription {
        return new Subscription(subscription.id, subscription.rules);
    }

    constructor(id: number, rules: string, isActive = true) {
        this.id = id;
        this.rules = rules;
        this.isActive = isActive;
    }

    clear() {
        this.id = 0;
        this.rules = '';
        this.isActive = false;
    }
}
