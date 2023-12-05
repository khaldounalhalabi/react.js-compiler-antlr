import {Expression} from "./Expressions/Expression.ts";

export class Arguments {
    expressions: Expression[];

    constructor(expressions: Expression[]) {
        this.expressions = expressions;
    }

    toString(): string {
        const args = this.expressions.map(expr => expr.toString()).join(', ');
        return `(${args})`;
    }
}
