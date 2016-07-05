"use strict";
var Alert = (function () {
    function Alert(name, done, img, type) {
        if (done === void 0) { done = false; }
        this.name = name;
        this.isDone = done;
        this.alertImage = img;
        this.alertType = type;
    }
    Alert.clone = function (alert) {
        return new Alert(alert.name, alert.isDone, alert.alertImage, alert.alertType);
    };
    Alert.prototype.clear = function () {
        this.name = '';
        this.isDone = true;
    };
    return Alert;
}());
exports.Alert = Alert;

//# sourceMappingURL=alerts.model.js.map
