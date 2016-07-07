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
import { Subscriber } from './subscriber.model';
import { SubscriberComponent } from './subscriber.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

@Component({
    selector: 'as-test',
    template: '<as-subscriber-info></as-Subscriber-info>',
    directives: [SubscriberComponent]
})
class TestComponent {
}

let testFixture: ComponentFixture<any>;
let subscriberCompiled: any, subscriptionCompiled: any;
let subscriberCmp: SubscriberComponent;


describe('SubscriberComponent', () => {
    beforeEachProviders(() => [
        disableDeprecatedForms(),
        provideForms()
    ]);

    it('should have been created successfully', async(inject([TestComponentBuilder],
        (tcb: TestComponentBuilder) => {
            tcb.createAsync(TestComponent).then((fixture) => {
                testFixture = fixture;
                fixture.detectChanges();

                subscriberCompiled = fixture.nativeElement;
                subscriberCmp = fixture.debugElement
                                        .children[0]
                                        .componentInstance;
                expect(subscriberCompiled).toBeDefined();

                subscriptionCompiled = fixture.nativeElement;
                expect(subscriptionCompiled).toBeDefined();
            });
    })));

    it('should add subscriber successfully', () => {

        subscriberCmp.subscriber = new Subscriber(1, 'Leonardo', '/assets/images/profile_demo_2.png', '/leonardo',
            '@-21.9833256, -47.8996836,15z?hl=pt-BR', true, []);
        subscriberCmp.addSubscriber();
        testFixture.detectChanges();
        subscriberCmp.subscriber = new Subscriber(2, 'Sandra', '/assets/images/profile_demo_2.png', '/leonardo',
            '@-21.9833256, -47.8996836,15z?hl=pt-BR', false, []);
        subscriberCmp.addSubscriber();
        testFixture.detectChanges();
        subscriberCmp.subscriber = new Subscriber(3, 'Americo', '/assets/images/profile_demo_2.png', '/leonardo',
            '@-21.9833256, -47.8996836,15z?hl=pt-BR', true, []);
        subscriberCmp.addSubscriber();
        testFixture.detectChanges();

        subscriberCmp.subscriber =
            new Subscriber(4, 'Thais', '/assets/images/profile_demo_2.png', '/leonardo',
                            '@-21.9833256, -47.8996836,15z?hl=pt-BR', true, []);
        subscriberCmp.addSubscriber();
        testFixture.detectChanges();

        let items = subscriberCompiled.querySelectorAll('.element-item');
        expect(items.length).toEqual(2);

        /*
        let item = items[items.length - 1];
        expect(item.querySelector('label').textContent).toEqual('test');
        expect(item.querySelector('input[type='checkbox']').checked).toBeTruthy();


        let subscriptionItems = subscriptionCompiled.querySelectorAll('.subscription-element-item');
        expect(subscriptionItems.length).toEqual(3);

        let item = subscriptionItems[subscriptionItems.length - 1];
        expect(item.querySelector('label').textContent).toEqual('test');
        expect(item.querySelector('input[type='checkbox']').checked).toBeTruthy();
        */
    });

    it('should delete Subscription successfully', () => {
        /*
        subscriberCmp.delSubscription(0,0);
        testFixture.detectChanges();
        expect(subscriberCompiled.querySelectorAll('.element-item').length)
            .toEqual(2);
         */
    });

    it('should delete Subscriber successfully', () => {
        subscriberCmp.delSubscriber('0');
        testFixture.detectChanges();
        expect(subscriberCompiled.querySelectorAll('.element-item').length)
            .toEqual(1);
    });
});
