import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'lodash';
import { User } from '../management/interfaces';

@Pipe({
    name: 'asActiveSubscriberFilter'
})
export class ActiveFilterSubscriberPipe implements PipeTransform {
    transform(users: User[], active: Boolean): User[] {
        if (active) {
            return users;
        }

        return filter(users, {active});
    }
}
