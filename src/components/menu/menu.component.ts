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

    public constructor(private stats: StatsService, private options: OptionsService, private events: EventsService) {
        //
    }

    public ngOnInit() {
        //
    }

    public getStats(): StatsService {
        return this.stats;
    }

    public getOptions(): OptionsService {
        return this.options;
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
