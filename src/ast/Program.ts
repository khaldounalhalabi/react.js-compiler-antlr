import {Statement} from "./Statement.ts";

export class Program {
    public statements: Statement[];

    constructor() {
        this.statements = [];
    }

    public addExpression(statement: Statement): void {
        this.statements.push(statement);
    }
}
