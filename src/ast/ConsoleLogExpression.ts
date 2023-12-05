import {Arguments} from "./Arguments.ts";

export class ConsoleLogExpression {
    args: Arguments | null;

    constructor(args: Arguments | null) {
        this.args = args;
    }

    toString(): string {
        const argsStr = this.args ? this.args.toString() : '';
        return `console.log(${argsStr})`;
    }
}
