import {Statement} from "../Statement.ts";
import {Identifier} from "../Expressions/Identifier.ts";
import {Expression} from "../Expressions/Expression.ts";

export class UseState extends Statement {
    public identifier: Identifier;

    public setIdentifier: Identifier;

    public expression?: Expression;


    constructor(identifier: Identifier, setIdentifier: Identifier, expression?: Expression) {
        super();
        this.identifier = identifier;
        this.setIdentifier = setIdentifier;

        if (expression) this.expression = expression;
    }

    public toString(): string {
        return `const [${this.identifier.toString()} , ${this.setIdentifier.toString()}] = useState(${this.expression?.toString() ?? ''})`;
    }
}