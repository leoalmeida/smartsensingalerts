import {
    it,
    inject,
    async,
    describe,
    expect,
    beforeEachProviders
} from '@angular/core/testing';

import {
    TestComponentBuilder,
    ComponentFixture
} from '@angular/compiler/testing';

import { Component } from '@angular/core';
import { Alert } from './alerts.model';
import { AlertsComponent } from './alerts.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

@Component({
    selector: 'as-test',
    template: '<as-alert-info></as-alert-info>',
    directives: [AlertsComponent]
})
class TestComponent {
}

let testFixture: ComponentFixture<any>;
let alertCompiled: any;
// let previouslen: number;

describe('AlertsComponent', () => {
    beforeEachProviders(() => [
        disableDeprecatedForms(),
        provideForms()
    ]);

    it('should have been created successfully', async(inject([TestComponentBuilder],
        (tcb: TestComponentBuilder) => {
            tcb.createAsync(TestComponent).then((fixture) => {
                testFixture = fixture;
                fixture.detectChanges();

                alertCompiled = fixture.nativeElement;
                expect(alertCompiled).toBeDefined();
            });
    })));

    it('should add alert successfully', () => {
        new Alert('Enchente', false, '/assets/images/enchente.png', '/enchentes');
        testFixture.detectChanges();

        let items = alertCompiled.querySelectorAll('.element-item');
        expect(items.length).toBeGreaterThan(1);

        this.previouslen = items.length;

        let item = items[items.length - 1];
        expect(item.querySelector('label').textContent).toEqual(' test');
        // expect(item.querySelector('input[type="checkbox"]').checked).toBeTruthy();
    });

    it('should delete Alert successfully', () => {
        testFixture.detectChanges();
        expect(alertCompiled.querySelectorAll('.element-item').length)
            .toBeLessThan(this.previouslen);
    });
});
