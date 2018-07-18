import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class OptionService {

    private rowsAmount = 1;
    private colsAmount = 6;
    private changeClickedCell = false;

    private constructor() {
        //
    }

    public getRowsAmount(): number {
        return this.rowsAmount;
    }

    public getColsAmount(): number {
        return this.colsAmount;
    }

    public getChangeClickedCell(): boolean {
        return this.changeClickedCell;
    }

    public setRowsAmount(value: number): void {
        this.rowsAmount = value;
    }

    public setColsAmount(value: number): void {
        this.colsAmount = value;
    }

    public setChangeClickedCell(value: boolean): void {
        this.changeClickedCell = value;
    }

}
