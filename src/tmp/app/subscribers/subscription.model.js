"use strict";
var Subscription = (function () {
    function Subscription(id, rules, isActive) {
        if (isActive === void 0) { isActive = true; }
        this.id = id;
        this.rules = rules;
        this.isActive = isActive;
    }
    Subscription.clone = function (subscription) {
        return new Subscription(subscription.id, subscription.rules);
    };
    Subscription.prototype.clear = function () {
        this.id = 0;
        this.rules = '';
        this.isActive = false;
    };
    return Subscription;
}());
exports.Subscription = Subscription;

//# sourceMappingURL=subscription.model.js.map
