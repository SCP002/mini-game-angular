export class Cell {

    private isActive: boolean = Cell.getRandomBoolean();

    private static getRandomBoolean(): boolean {
        return Math.random() >= 0.5;
    }

    public getIsActive(): boolean {
        return this.isActive;
    }

    public revertState(): void {
        this.isActive = !this.isActive;
    }

}
