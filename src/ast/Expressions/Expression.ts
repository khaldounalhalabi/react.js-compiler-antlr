import {Statement} from "../Statement.ts";

export abstract class Expression extends Statement {

    protected constructor() {
        super();
    }

    public toString(): string {
        return `${this}`;
    }
}