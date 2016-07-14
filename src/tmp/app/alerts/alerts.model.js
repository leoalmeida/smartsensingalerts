"use strict";
var Alert = (function () {
    function Alert(name, icon, type, severity, label, startDate, localization, moreInfo, sensors) {
        /*this.name = name;
        this.icon = icon;
        this.type = type;
        this.isActive = active;
        this.severity = severity;
        this.label = label;
        this.startDate = startDate;
        this.localization = localization;
        this.moreInfo = moreInfo;
        this.isDraggable = draggable;
        this.sensors = sensors;*/
    }
    Alert.clone = function (alert) {
        return new Alert(alert.name, alert.icon, alert.type, alert.severity, alert.label, alert.startDate, alert.localization, alert.moreInfo, alert.sensors);
    };
    Alert.prototype.clear = function () {
        this.name = '';
        this.isActive = true;
    };
    return Alert;
}());
exports.Alert = Alert;

//# sourceMappingURL=alerts.model.js.map
