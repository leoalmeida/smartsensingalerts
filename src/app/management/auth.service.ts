import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {AuthProviders, AuthMethods, AngularFire} from 'angularfire2/angularfire2';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;

    constructor(public af: AngularFire) {}

    login() {

        this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup,
        });

        return Observable.of(this.af.auth).delay(1000).do(
            auth => {this.isLoggedIn = true;
            console.log(auth);
            });
    }

    logout() {
        this.isLoggedIn = false;
    }
}
