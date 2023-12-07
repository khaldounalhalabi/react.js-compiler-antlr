import {Expression} from "./Expression.ts";

export class Number extends Expression {
    public num: number;


    constructor(num: number) {
        super();
        this.num = num;
    }

    public toString(): string {
        return `${this.num}`;
    }
}