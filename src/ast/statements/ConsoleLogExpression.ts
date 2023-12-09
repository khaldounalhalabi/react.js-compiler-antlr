import {Statement} from "../Statement.ts";
import {Arguments} from "../Arguments.ts";

export class ConsoleLogExpression extends Statement {
    args: Arguments | null;

    constructor(args: Arguments | null) {
        super();
        this.args = args;
    }

    toString(): string {
        const argsStr = this.args ? this.args.toString() : '';
        return `console.log(${argsStr})`;
    }
}
