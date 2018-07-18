import {Component, OnInit} from '@angular/core';
import {FieldService} from '../../services/field/field.service';
import {OptionService} from '../../services/option/option.service';
import {StatService} from '../../services/stat/stat.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    private displayRows: number = this.optionSvc.getRowsAmount();
    private displayCols: number = this.optionSvc.getColsAmount();

    public constructor(private readonly statSvc: StatService,
                       private readonly optionSvc: OptionService,
                       private readonly fieldSvc: FieldService) {
        //
    }

    public ngOnInit() {
        //
    }

    public getDisplayRows(): number {
        return this.displayRows;
    }

    public getDisplayCols(): number {
        return this.displayCols;
    }

    public getStepsAmount(): number {
        return this.statSvc.getStepsAmount();
    }

    public getChangeClickedCell(): boolean {
        return this.optionSvc.getChangeClickedCell();
    }

    public setDisplayRows(value: number): void {
        this.displayRows = value;
    }

    public setDisplayCols(value: number): void {
        this.displayCols = value;
    }

    public setRowsAmount(): void {
        this.optionSvc.setRowsAmount(this.displayRows);

        this.fieldSvc.createField();
    }

    public setColsAmount(): void {
        this.optionSvc.setColsAmount(this.displayCols);

        this.fieldSvc.createField();
    }

    public setChangeClickedCell(value: boolean): void {
        this.optionSvc.setChangeClickedCell(value);
    }

    public randomizeField(): void {
        this.fieldSvc.createField();
    }

    public showAbout(): void {
        window.alert('Small puzzle game.\n' +
            'To win, mark all cells green.\n' +
            'Click on the cell will revert colors of all neighbors except for diagonals.');
    }

}
