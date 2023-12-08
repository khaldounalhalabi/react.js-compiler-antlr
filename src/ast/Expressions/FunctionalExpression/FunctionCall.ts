import {Expression} from "../Expression.ts";
import {Identifier} from "../Identifier.ts";
import {FunctionalExpression} from "./FunctionalExpression.ts";

export class FunctionCall extends FunctionalExpression {
    public identifier: Identifier;
    public args: Expression[]; // Assuming arguments can be expressions

    constructor(identifier: Identifier, args: Expression[]) {
        super();
        this.identifier = identifier;
        this.args = args;
    }

    public toString(): string {
        return `${this.identifier.toString()}(${this.args.map(param => param.toString()).join(', ')})`;
    }
}