import {Cell} from './cell';

export class Row {

    private readonly cells: Cell[] = [];

    public getCells(): Cell[] {
        return this.cells;
    }

    public addCell(cell: Cell): void {
        this.cells.push(cell);
    }

}
