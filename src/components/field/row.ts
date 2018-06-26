import {Cell} from './cell';

export class Row {

    private readonly cells: Array<Cell> = [];

    public getCells(): Array<Cell> {
        return this.cells;
    }

    public addCell(cell: Cell): void {
        this.cells.push(cell);
    }

}
