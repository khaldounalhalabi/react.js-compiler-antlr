import {FuncExpr} from "./FuncExpr.ts";
import {Id} from "./Id.ts";
import Block from "../Block.ts";

export class FunctionExpression extends FuncExpr {

    parameters: Id[];
    block: Block;

    constructor(parameters: Id[], block: Block) {
        super(parameters, block);
        this.parameters = parameters;
        this.block = block;
    }

    toString(): string {
        return super.toString();
    }
}