import {Injectable} from '@angular/core';
import {Event, EventsService} from '../events/events.service';

@Injectable({
    providedIn: 'root'
})
export class OptionsService {

    private rowsAmount = 1;
    private columnsAmount = 6;
    private changeClickedCell = false;

    private constructor(private readonly events: EventsService) {
        //
    }

    public getRowsAmount(): number {
        return this.rowsAmount;
    }

    public getColumnsAmount(): number {
        return this.columnsAmount;
    }

    public getChangeClickedCell(): boolean {
        return this.changeClickedCell;
    }

    public setRowsAmount(value: number): void {
        this.rowsAmount = value;

        this.events.emit(Event.CREATE_FIELD);
    }

    public setColumnsAmount(value: number): void {
        this.columnsAmount = value;

        this.events.emit(Event.CREATE_FIELD);
    }

    public setChangeClickedCell(value: boolean): void {
        this.changeClickedCell = value;
    }

}
