import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EventService {

    private readonly eventSub: Subject<Event> = new Subject<Event>();

    private constructor() {
        //
    }

    public getEventObs(): Observable<Event> {
        return this.eventSub.asObservable();
    }

    public emit(event: Event): void {
        this.eventSub.next(event);
    }

}

export enum Event {

    CREATE_FIELD

}
