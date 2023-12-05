import {Expression} from "./Expression.ts";
import {Id} from "./Id.ts";
import Block from "../Block.ts";

export class ArrowFunc extends Expression {
    parameters: Id[];
    block: Block;

    constructor(parameters: Id[], block: Block) {
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