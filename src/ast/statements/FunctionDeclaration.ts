import {Statement} from "../Statement.ts";
import {Id} from "../Expressions/Id.ts";
import Block from "../Block.ts";

export class FunctionDeclarationNode extends Statement {
    identifier: Id;
    parameters: Id[];
    block: Block;

    constructor(identifier: Id, parameters: Id[], block: Block) {
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