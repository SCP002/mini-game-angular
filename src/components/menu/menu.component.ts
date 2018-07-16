import {Component, OnInit} from '@angular/core';
import {Event, EventService} from '../../services/event/event.service';
import {OptionService} from '../../services/option/option.service';
import {StatService} from '../../services/stat/stat.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    public constructor(private readonly statSvc: StatService,
                       private readonly optionSvc: OptionService,
                       private readonly eventSvc: EventService) {
        //
    }

    public ngOnInit() {
        //
    }

    public getStepsAmount(): number {
        return this.statSvc.getStepsAmount();
    }

    public getRowsAmount(): number {
        return this.optionSvc.getRowsAmount();
    }

    public getColumnsAmount(): number {
        return this.optionSvc.getColumnsAmount();
    }

    public getChangeClickedCell(): boolean {
        return this.optionSvc.getChangeClickedCell();
    }

    public setRowsAmount(value: number): void {
        this.optionSvc.setRowsAmount(value);
    }

    public setColumnsAmount(value: number): void {
        this.optionSvc.setColumnsAmount(value);
    }

    public setChangeClickedCell(value: boolean): void {
        this.optionSvc.setChangeClickedCell(value);
    }

    public randomizeField(): void {
        this.eventSvc.emit(Event.CREATE_FIELD);
    }

    public showAbout(): void {
        window.alert('Small puzzle game.\n' +
            'To win, mark all cells green.\n' +
            'Click on the cell will revert colors of all neighbors except for diagonals.');
    }

}
