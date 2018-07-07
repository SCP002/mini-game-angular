import {Component, OnInit} from '@angular/core';
import {Event, EventsService} from '../../services/events/events.service';
import {OptionsService} from '../../services/options/options.service';
import {StatsService} from '../../services/stats/stats.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    public constructor(private readonly stats: StatsService,
                       private readonly options: OptionsService,
                       private readonly events: EventsService) {
        //
    }

    public ngOnInit() {
        //
    }

    public getStepsAmount(): number {
        return this.stats.getStepsAmount();
    }

    public getRowsAmount(): number {
        return this.options.getRowsAmount();
    }

    public getColumnsAmount(): number {
        return this.options.getColumnsAmount();
    }

    public getChangeClickedCell(): boolean {
        return this.options.getChangeClickedCell();
    }

    public setRowsAmount(value: number): void {
        this.options.setRowsAmount(value);
    }

    public setColumnsAmount(value: number): void {
        this.options.setColumnsAmount(value);
    }

    public setChangeClickedCell(value: boolean): void {
        this.options.setChangeClickedCell(value);
    }

    public randomizeField(): void {
        this.events.emit(Event.CREATE_FIELD);
    }

    public showAbout(): void {
        window.alert('Small puzzle game.\n' +
            'To win, mark all cells green.\n' +
            'Click on the cell will revert colors of all neighbors except for diagonals.');
    }

}
