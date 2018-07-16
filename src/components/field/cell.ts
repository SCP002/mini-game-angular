export class Cell {

    private active: boolean = Cell.getRandomBoolean();

    private static getRandomBoolean(): boolean {
        return Math.random() >= 0.5;
    }

    public isActive(): boolean {
        return this.active;
    }

    public revertState(): void {
        this.active = !this.active;
    }

}
