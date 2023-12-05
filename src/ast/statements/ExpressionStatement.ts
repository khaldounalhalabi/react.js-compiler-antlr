import {Statement} from "../Statement.ts";
import {Expression} from "../Expressions/Expression.ts";

export class ExpressionStatement extends Statement {
    public expressionStatement: Expression;


    constructor(expressionStatement: Expression) {
        super();
        this.expressionStatement = expressionStatement;
    }

    public toString(): string {
        return this.expressionStatement.toString();
    }
}
