import {Statement} from "../Statement.ts";

export class Expression extends Statement {

    constructor() {
        super();
    }

    public toString(): string {
        return `${this}`;
    }
}