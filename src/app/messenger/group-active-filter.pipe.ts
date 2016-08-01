import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'lodash';
import { Group } from '../management/interfaces';

@Pipe({
    name: 'asActiveGroupsFilter'
})
export class ActiveFilterGroupsPipe implements PipeTransform {
    transform(groups: Group[], active: Boolean): Group[] {
        if (active) {
            return groups;
        }

        return filter(groups, {active});
    }
}
