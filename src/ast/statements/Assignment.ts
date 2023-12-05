import {Id} from "../Expressions/Id.ts";
import {Expression} from "../Expressions/Expression.ts";

export class Assignment {
    identifier: Id;
    expression: Expression;

    constructor(identifier: Id, expression: Expression) {
        this.identifier = identifier;
        this.expression = expression;
    }

    toString(): string {
        return `${this.identifier.toString()} = ${this.expression.toString()}`;
    }
}