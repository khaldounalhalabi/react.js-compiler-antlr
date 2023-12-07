import {Expression} from "./Expression.ts";
import {Identifier} from "./Identifier.ts";
import Block from "../Block.ts";

export class ArrowFunc extends Expression {
    parameters: Identifier[];
    block: Block;

    constructor(parameters: Identifier[], block: Block) {
        super();
        this.parameters = parameters;
        this.block = block;
    }

    public toString(): string {
        const params = this.parameters.map(param => param.name).join(', ');
        return `(${params}) => ${this.block.toString()}`;
    }
}


export class ArrowFunction extends ArrowFunc {
    
}