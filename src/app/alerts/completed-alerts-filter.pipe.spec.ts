import { CompletedAlertsFilterPipe } from './completed-alerts-filter.pipe';
import { Alert } from './alerts.model';

describe('CompletedAlertsFilterPipe', () => {
    let pipe: CompletedAlertsFilterPipe;
    let alerts: Alert[] = [
        new Alert('test1', true),
        new Alert('test2', false)
    ];

    beforeEach(() => {
        pipe = new CompletedAlertsFilterPipe();
    });

    it('should return original alerts when pass true', () => {
        let result = pipe.transform(alerts, true);
        expect(result).toEqual(alerts);
    });

    it('should return not-finished alerts when pass false', () => {
        let result = pipe.transform(alerts, false);
        result.forEach(alert => expect(alert.isDone).toBeFalsy());
    });
});
