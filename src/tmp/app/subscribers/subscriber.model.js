"use strict";
var Subscriber = (function () {
    function Subscriber(id, name, avatar, profile, geo, isActive, subscriptions) {
        if (isActive === void 0) { isActive = true; }
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.profile = profile;
        this.geo = geo;
        this.isActive = isActive;
        this.subscriptions = subscriptions;
    }
    Subscriber.clone = function (subscriber) {
        return new Subscriber(subscriber.id, subscriber.name, subscriber.avatar, subscriber.profile, subscriber.geo, subscriber.isActive, subscriber.subscriptions);
    };
    Subscriber.prototype.clear = function () {
        this.id = 0;
        this.name = '';
        this.avatar = '';
        this.profile = '';
        this.geo = '';
        this.isActive = false;
        this.subscriptions = [];
    };
    return Subscriber;
}());
exports.Subscriber = Subscriber;

//# sourceMappingURL=subscriber.model.js.map
