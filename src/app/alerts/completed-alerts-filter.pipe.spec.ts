import { CompletedAlertsFilterPipe } from './completed-alerts-filter.pipe';
import {AlertMarker} from '../management/interfaces';

describe('CompletedAlertsFilterPipe', () => {
    let pipe: CompletedAlertsFilterPipe;
    let alerts: AlertMarker[] = [
        {
            id: 0,
            name: 'teste1',
            alertImage: 'flood.svg',
            severity: 2,
            isActive: false,
            startDate: '',
            releaseDate: '',
            lat: -21.975086,
            lng: -47.901249,
            label: 'N',
            draggable: false,
            icon: 'fa-tint',
            routeLink: '/enchentes',
            strAddress: ''
        }, {
            id: 1,
            name: 'teste2',
            alertImage: 'flood.svg',
            severity: 4,
            isActive: true,
            startDate: '',
            releaseDate: '',
            lat: -21.975086,
            lng: -47.901249,
            label: 'N',
            draggable: false,
            icon: 'fa-tint',
            routeLink: '/enchentes',
            strAddress: ''
        }
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
        result.forEach(alert => expect(alert.isActive).toBeFalsy());
    });
});
