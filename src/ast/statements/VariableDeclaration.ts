import {Expression} from "../Expressions/Expression.ts";
import {Identifier} from "../Expressions/Identifier.ts";
import {VariableType} from "../VariableType.ts";

export class VariableDeclaration{
    variableType: VariableType;
    identifier: Identifier;
    expression: Expression | null;

    constructor(variableType: VariableType, identifier: Identifier, expression: Expression | null) {
        this.variableType = variableType;
        this.identifier = identifier;
        this.expression = expression;
    }

    toString(): string {
        const expressionStr = this.expression ? ` = ${this.expression.toString()}` : '';
        return `${this.variableType.toString()} ${this.identifier.toString()}${expressionStr}`;
    }
}