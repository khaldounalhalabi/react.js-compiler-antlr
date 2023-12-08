import {Expression} from "./Expression.ts";

export class TemplateString extends Expression {
    public expression: Expression;


    constructor(expression: Expression) {
        super();
        this.expression = expression;
    }

    public toString(): string {
        return "${" + this.expression.toString() + "}";
    }
}