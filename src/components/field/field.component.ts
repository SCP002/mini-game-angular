import {Component, OnInit} from '@angular/core';
import {Event, EventsService} from '../../services/events/events.service';
import {OptionsService} from '../../services/options/options.service';
import {StatsService} from '../../services/stats/stats.service';
import {Cell} from './cell';
import {Row} from './row';

@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

    private rows: Array<Row> = [];

    public constructor(private stats: StatsService, private options: OptionsService, private events: EventsService) {
        //
    }

    public ngOnInit() {
        this.createField();

        this.options.rowsAmountSub.subscribe(() => {
            this.createField();
        });

        this.options.columnsAmountSub.subscribe(() => {
            this.createField();
        });

        this.events.eventsSub.subscribe((event: Event) => {
            if (event === Event.CREATE_FIELD) {
                this.createField();
            }
        });
    }

    public getRows(): Array<Row> {
        return this.rows;
    }

    public onCellClick(rowIndex: number, cellIndex: number): void {
        this.stats.addStep();

        if (this.options.getChangeClickedCell()) {
            this.revertCellState(rowIndex, cellIndex);
        }

        this.revertCellState(rowIndex, cellIndex - 1);
        this.revertCellState(rowIndex, cellIndex + 1);
        this.revertCellState(rowIndex - 1, cellIndex);
        this.revertCellState(rowIndex + 1, cellIndex);

        if (this.isWin()) {
            window.alert('You win in ' + this.stats.getStepsAmount() + ' steps!');

            this.createField();
        }
    }

    private createField(): void {
        this.stats.setStepsAmount(0);
        this.rows = [];

        for (let i = 0; i < this.options.getRowsAmount(); ++i) {
            const row: Row = new Row();

            for (let j = 0; j < this.options.getColumnsAmount(); ++j) {
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
                if (!cell.getIsActive()) {
                    return false;
                }
            }
        }

        return true;
    }

}
