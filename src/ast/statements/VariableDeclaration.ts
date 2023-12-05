import {Expression} from "../Expressions/Expression.ts";
import {Id} from "../Expressions/Id.ts";

export class VariableDeclaration {
    variableType: string;
    identifier: Id;
    expression: Expression | null;

    constructor(variableType: string, identifier: Id, expression: Expression | null) {
        this.variableType = variableType;
        this.identifier = identifier;
        this.expression = expression;
    }

    toString(): string {
        const expressionStr = this.expression ? ` = ${this.expression.toString()}` : '';
        return `${this.variableType} ${this.identifier.toString()}${expressionStr}`;
    }
}