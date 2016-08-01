import { Component, Input } from '@angular/core';
import { User, Group } from '../management/interfaces';
import { MAIN } from '../shared/constant/main';

@Component({
    selector: 'as-group-details',
    templateUrl: 'app/messenger/group-details.component.html',
    directives: []
})
export class GroupDetailsComponent {
    @Input() formGroup:  Group;

    public save(form: User, isValid: boolean) {
        console.log(form, isValid);
    }

    getImageSrc(imgIdx: number) {
        return MAIN.IMAGE_ASSETS_CONFIG.folder + MAIN.IMAGE_ASSETS_CONFIG.avatarPattern +
            imgIdx +  MAIN.IMAGE_ASSETS_CONFIG.defaultImageType;
    }

}
