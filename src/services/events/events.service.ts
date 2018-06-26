import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/internal/Subject';

@Injectable({
    providedIn: 'root'
})
export class EventsService {

    public readonly eventsSub: Subject<Event> = new Subject<Event>();

    private constructor() {
        //
    }

    public emit(event: Event): void {
        this.eventsSub.next(event);
    }

}

export enum Event {

    CREATE_FIELD

}
