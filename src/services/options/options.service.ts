import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OptionsService {

    private rowsAmount = 1;
    private columnsAmount = 6;

    private changeClickedCell = false;

    private readonly rowsAmountSub: Subject<number> = new Subject<number>();
    private readonly columnsAmountSub: Subject<number> = new Subject<number>();

    private constructor() {
        this.rowsAmountSub.subscribe((value: number) => {
            this.rowsAmount = value;
        });

        this.columnsAmountSub.subscribe((value: number) => {
            this.columnsAmount = value;
        });
    }

    public getRowsAmount(): number {
        return this.rowsAmount;
    }

    public getRowsAmountObs(): Observable<number> {
        return this.rowsAmountSub.asObservable();
    }

    public getColumnsAmountObs(): Observable<number> {
        return this.columnsAmountSub.asObservable();
    }

    public getColumnsAmount(): number {
        return this.columnsAmount;
    }

    public getChangeClickedCell(): boolean {
        return this.changeClickedCell;
    }

    public setRowsAmount(value: number): void {
        this.rowsAmountSub.next(value);
    }

    public setColumnsAmount(value: number): void {
        this.columnsAmountSub.next(value);
    }

    public setChangeClickedCell(value: boolean): void {
        this.changeClickedCell = value;
    }

}
