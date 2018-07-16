import {Component, OnInit} from '@angular/core';
import {Event, EventService} from '../../services/event/event.service';
import {OptionService} from '../../services/option/option.service';
import {StatService} from '../../services/stat/stat.service';
import {Cell} from './cell';
import {Row} from './row';

@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

    private rows: Row[] = [];

    public constructor(private readonly statSvc: StatService,
                       private readonly optionSvc: OptionService,
                       private readonly eventSvc: EventService) {
        //
    }

    public ngOnInit() {
        this.createField();

        this.eventSvc.getEventObs().subscribe((event: Event) => {
            if (event === Event.CREATE_FIELD) {
                this.createField();
            }
        });
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

    private createField(): void {
        this.statSvc.setStepsAmount(0);
        this.rows = [];

        for (let i = 0; i < this.optionSvc.getRowsAmount(); ++i) {
            const row: Row = new Row();

            for (let j = 0; j < this.optionSvc.getColumnsAmount(); ++j) {
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
