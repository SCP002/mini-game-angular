import {Component, OnInit} from '@angular/core';
import {FieldService} from '../../services/field/field.service';
import {Row} from '../../services/field/row';

@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

    public constructor(private readonly fieldSvc: FieldService) {
        //
    }

    public ngOnInit() {
        this.fieldSvc.createField();
    }

    public getRows(): Row[] {
        return this.fieldSvc.getRows();
    }

    public onCellClick(rowIndex: number, cellIndex: number): void {
        this.fieldSvc.onCellClick(rowIndex, cellIndex);
    }

}
