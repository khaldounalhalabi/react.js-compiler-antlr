import {Expression} from "../Expressions/Expression.ts";
import {Identifier} from "../Expressions/Identifier.ts";
import {Statement} from "../Statement.ts";

export class VariableDeclaration extends Statement {
    variableType: string;
    identifier: Identifier;
    expression: Expression | null;

    constructor(variableType: string, identifier: Identifier, expression: Expression | null) {
        super();
        this.variableType = variableType;
        this.identifier = identifier;
        this.expression = expression;
    }

    toString(): string {
        const expressionStr = this.expression ? ` = ${this.expression.toString()}` : '';
        return `${this.variableType} ${this.identifier.toString()}${expressionStr}`;
    }
}