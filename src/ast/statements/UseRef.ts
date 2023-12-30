import {Statement} from "../Statement.ts";
import {Identifier} from "../Expressions/Identifier.ts";
import {Expression} from "../Expressions/Expression.ts";

export class UseRef extends Statement {
    public identifier: Identifier;

    public expression?: Expression;


    constructor(identifier: Identifier, expression?: Expression) {
        super();
        this.identifier = identifier;

        if (expression) this.expression = expression;
    }

    public toString() {
        return `const ${this.identifier.toString()} = useRef(${this.expression?.toString() ?? ''})`
    }
}