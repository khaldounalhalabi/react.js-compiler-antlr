import {Statement} from "../Statement.ts";
import {Identifier} from "../Expressions/Identifier.ts";
import {Block} from "../Block.ts";

export class FunctionDeclaration extends Statement {
    identifier: Identifier;
    parameters: Identifier[];
    block: Block;

    constructor(identifier: Identifier, parameters: Identifier[], block: Block) {
        super();
        this.identifier = identifier;
        this.parameters = parameters;
        this.block = block;
    }

    public toString(): string {
        const params = this.parameters.map(param => param.toString()).join(', ');
        return `function ${this.identifier.toString()}(${params}) ${this.block.toString()}`;
    }
}