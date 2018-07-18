import {Injectable} from '@angular/core';
import {OptionService} from '../option/option.service';
import {StatService} from '../stat/stat.service';
import {Cell} from './cell';
import {Row} from './row';

@Injectable({
    providedIn: 'root'
})
export class FieldService {

    private rows: Row[] = [];

    private constructor(private readonly statSvc: StatService,
                        private readonly optionSvc: OptionService) {
        //
    }

    public getRows(): Row[] {
        return this.rows;
    }

    public onCellClick(rowIndex: number, cellIndex: number): void {
        this.statSvc.addStep();

        if (this.optionSvc.getChangeClickedCell()) {
            this.revertCellState(rowIndex, cellIndex);
        }

        this.revertCellState(rowIndex, cellIndex - 1);
        this.revertCellState(rowIndex, cellIndex + 1);
        this.revertCellState(rowIndex - 1, cellIndex);
        this.revertCellState(rowIndex + 1, cellIndex);

        if (this.isWin()) {
            window.alert('You win in ' + this.statSvc.getStepsAmount() + ' steps!');

            this.createField();
        }
    }

    public createField(): void {
        this.statSvc.setStepsAmount(0);
        this.rows = [];

        for (let i = 0; i < this.optionSvc.getRowsAmount(); ++i) {
            const row: Row = new Row();

            for (let j = 0; j < this.optionSvc.getColsAmount(); ++j) {
                const cell: Cell = new Cell();

                row.addCell(cell);
            }

            this.rows.push(row);
        }
    }

    private revertCellState(rowIndex: number, cellIndex: number): void {
        if (rowIndex >= 0 &&
            cellIndex >= 0 &&
            rowIndex < this.rows.length &&
            cellIndex < this.rows[rowIndex].getCells().length) {
            this.rows[rowIndex].getCells()[cellIndex].revertState();
        }
    }

    private isWin(): boolean {
        for (const row of this.rows) {
            for (const cell of row.getCells()) {
                if (!cell.isActive()) {
                    return false;
                }
            }
        }

        return true;
    }

}
