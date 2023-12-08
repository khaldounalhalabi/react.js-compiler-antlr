import {Expression} from "./Expression.ts";

export class String extends Expression {
    public str: string;

    constructor(str: string) {
        super();
        this.str = str;
    }

    public toString(): string {
        return this.str;
    }
}