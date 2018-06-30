import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/internal/Subject';

@Injectable({
    providedIn: 'root'
})
export class EventsService {

    private readonly eventsSub: Subject<Event> = new Subject<Event>();

    private constructor() {
        //
    }

    public getEventsSub(): Subject<Event> {
        return this.eventsSub;
    }

    public emit(event: Event): void {
        this.eventsSub.next(event);
    }

}

export enum Event {

    CREATE_FIELD

}
