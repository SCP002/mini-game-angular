import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/internal/Subject';

@Injectable({
    providedIn: 'root'
})
export class OptionsService {

    private rowsAmount = 1;
    private columnsAmount = 6;

    private changeClickedCell = false;

    public readonly rowsAmountSub: Subject<number> = new Subject<number>();
    public readonly columnsAmountSub: Subject<number> = new Subject<number>();

    private constructor() {
        this.rowsAmountSub.subscribe(value => {
            this.rowsAmount = value;
        });

        this.columnsAmountSub.subscribe(value => {
            this.columnsAmount = value;
        });
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
        this.rowsAmountSub.next(value);
    }

    public setColumnsAmount(value: number): void {
        this.columnsAmountSub.next(value);
    }

    public setChangeClickedCell(value: boolean): void {
        this.changeClickedCell = value;
    }

}
