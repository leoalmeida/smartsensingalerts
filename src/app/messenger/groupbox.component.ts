import { Component, Input, OnInit }            from '@angular/core';
import { Group } from '../management/interfaces';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';
import { SysLogger } from '../utils/SysLogger';
import { MAIN } from '../shared/constant/main';
import { FORM_DIRECTIVES } from '@angular/forms';
import { GroupDetailsComponent } from './group-details.component';
import { GroupsService } from './groups.service';
import { SafeFilter } from '../utils/safeimage-pipe.filter';

declare let google: any;

@Component({
    selector: 'as-groupbox',
    templateUrl: 'app/messenger/groupbox.component.html',
    styleUrls: ['app/messenger/groupbox.component.css'],
    directives: [GOOGLE_MAPS_DIRECTIVES, FORM_DIRECTIVES, GroupDetailsComponent],
    providers:  [GroupsService, SysLogger],
    pipes: [SafeFilter]
})
export class GroupBoxComponent implements OnInit {
    @Input() group:  Group;
    showMoreInfo: boolean;
    groupImageIcon: string;
    localizationIcon: string;
    datetimeIcon: string;
    severityIcon: string;
    elapsedIcon: string;
    backgroundImage: string;

    ngOnInit() {
        this.groupImageIcon = MAIN.IMAGE_ASSETS_CONFIG.folder + MAIN.IMAGE_ASSETS_CONFIG.avatarPattern +
            this.group.icon +  MAIN.IMAGE_ASSETS_CONFIG.defaultImageType;
        this.localizationIcon = MAIN.IMAGE_ASSETS_CONFIG.localizationIcon;
        this.datetimeIcon = MAIN.IMAGE_ASSETS_CONFIG.datetimeIcon;
        this.severityIcon =  MAIN.IMAGE_ASSETS_CONFIG.folder +
            MAIN.IMAGE_ASSETS_CONFIG.severityPattern +
            this.group.securityLevel +
            MAIN.IMAGE_ASSETS_CONFIG.defaultIconType;
        this.elapsedIcon = MAIN.IMAGE_ASSETS_CONFIG.elapsedIcon;
        this.backgroundImage = 'url(' + ( this.group.background < 0 ?
                                MAIN.IMAGE_ASSETS_CONFIG.backImage :
                                MAIN.IMAGE_ASSETS_CONFIG.folder + MAIN.IMAGE_ASSETS_CONFIG.backgroundImgPattern
                                + this.group.background + MAIN.IMAGE_ASSETS_CONFIG.defaultImageType) + ')';
    }

    getImageSrc(imgIdx: number) {
        return this.groupImageIcon = MAIN.IMAGE_ASSETS_CONFIG.folder + MAIN.IMAGE_ASSETS_CONFIG.avatarPattern +
            imgIdx +  MAIN.IMAGE_ASSETS_CONFIG.defaultImageType;
    }

    onSelect(key: string) {
        this.showMoreInfo = !this.showMoreInfo;
    }


}
