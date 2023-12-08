import {FunctionalExpression} from "./FunctionalExpression.ts";
import {Parameter} from "../../Parameters.ts";
import {Block} from "../../Block.ts";

export class FunctionExpression extends FunctionalExpression {
    public funcType: string;
    public parameters: Parameter[];
    public block: Block;

    constructor(funcType: string, parameters: Parameter[], block: Block) {
        super();
        this.funcType = funcType;
        this.parameters = parameters;
        this.block = block;
    }

    public toString(): string {
        const paramsString = this.parameters.map(param => param.toString()).join(', ');
        return `${this.funcType} (${paramsString}) ${this.block.toString()}`;
    }
}