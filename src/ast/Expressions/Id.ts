import {Expression} from "./Expression.ts";

export class Id extends Expression {
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    public toString(): string {
        return this.name;
    }
}