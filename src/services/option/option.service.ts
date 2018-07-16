import {Injectable} from '@angular/core';
import {Event, EventService} from '../event/event.service';

@Injectable({
    providedIn: 'root'
})
export class OptionService {

    private rowsAmount = 1;
    private columnsAmount = 6;
    private changeClickedCell = false;

    private constructor(private readonly eventSvc: EventService) {
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

        this.eventSvc.emit(Event.CREATE_FIELD);
    }

    public setColumnsAmount(value: number): void {
        this.columnsAmount = value;

        this.eventSvc.emit(Event.CREATE_FIELD);
    }

    public setChangeClickedCell(value: boolean): void {
        this.changeClickedCell = value;
    }

}
