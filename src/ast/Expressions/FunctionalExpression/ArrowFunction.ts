import {Parameter} from "../../Parameters.ts";
import {Block} from "../../Block.ts";
import {FunctionalExpression} from "./FunctionalExpression.ts";

export class ArrowFunction extends FunctionalExpression{
    public parameters : Parameter[];
    public block : Block;


    constructor(parameters: Parameter[], block: Block) {
        super();
        this.parameters = parameters;
        this.block = block;
    }

    public toString(): string {
        const paramsString = this.parameters.map(param => param.toString()).join(', ');
        const blockString = this.block.toString();

        return `(${paramsString}) => ${blockString}`;
    }
}