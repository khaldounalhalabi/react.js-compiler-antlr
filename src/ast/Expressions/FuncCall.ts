import {Expression} from "./Expression.ts";
import {Id} from "./Id.ts";

export class FuncCall extends Expression {
    public identifier: Id;
    public args: Expression[]; // Assuming arguments can be expressions

    constructor(identifier: Id, args: Expression[]) {
        super();
        this.identifier = identifier;
        this.args = args;
    }

    public toString(): string {
        return `${this.identifier.toString()}(${this.args.join(', ')})`;
    }
}

export class FunctionCall extends FuncCall {

}