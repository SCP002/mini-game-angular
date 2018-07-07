import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EventsService {

    private readonly eventsSub: Subject<Event> = new Subject<Event>();

    private constructor() {
        //
    }

    public getEventsObs(): Observable<Event> {
        return this.eventsSub.asObservable();
    }

    public emit(event: Event): void {
        this.eventsSub.next(event);
    }

}

export enum Event {

    CREATE_FIELD

}
