import { DomSanitizationService } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'asSafe'})
export class SafeFilter implements PipeTransform {
    constructor(private sanitizer: DomSanitizationService) {}

    transform(style: string) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }
}
