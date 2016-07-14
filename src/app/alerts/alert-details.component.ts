import { Component, Input } from '@angular/core';
import { AlertMarker } from '../management/interfaces';
import { DialogService } from '../dialog.service';
import { Observable } from 'rxjs/Rx';
import { SysLogger } from '../utils/SysLogger';
import { DatePipe } from '@angular/common';
import { FORM_DIRECTIVES } from '@angular/forms';


@Component({
    selector: 'as-alert-details',
    templateUrl: 'app/alerts/alert-details.html',
    styleUrls: ['input {width: 20em}'],
    providers: [SysLogger, DialogService],
    directives: [FORM_DIRECTIVES]
})
export class AlertDetailsComponent {
    @Input() formAlert:  AlertMarker;
    sub: any;


    constructor( private dialogService: DialogService ) {
        let datePipe = new DatePipe();
        let datenow = datePipe.transform(new Date(), 'short');
        SysLogger.log(datenow);
    }

    canDeactivate(): Observable<boolean> | boolean {
        // Allow synchronous navigation (`true`) if no alert or the alert is unchanged
        if (!this.formAlert) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        let p = this.dialogService.confirm('Descartar mudanças?');
        let o = Observable.fromPromise(p);
        return o;
    }

}
