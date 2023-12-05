import {Statement} from "../Statement.ts";
import {ConsoleLogExpression} from "../ConsoleLogExpression.ts";

export class ConsoleLogStatement extends Statement {
    public console: ConsoleLogExpression;


    constructor(console: ConsoleLogExpression) {
        super();
        this.console = console;
    }

    public toString(): string {
        return this.console.toString();
    }
}