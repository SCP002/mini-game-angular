import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StatService {

    private stepsAmount = 0;

    private constructor() {
        //
    }

    public getStepsAmount(): number {
        return this.stepsAmount;
    }

    public setStepsAmount(value: number): void {
        this.stepsAmount = value;
    }

    public addStep(): void {
        this.stepsAmount++;
    }

}
