import ReactVisitor from "../antlr/ReactVisitor.ts";
import {VariableType} from "../ast/VariableType.ts";
import {VariableTypeContext} from "../antlr/ReactParser.ts";

export class VariableTypeVisitor extends ReactVisitor<VariableType> {
    visitVariableType: (ctx: VariableTypeContext) => VariableType = (ctx: VariableTypeContext) => {
        console.log(ctx.children[0]);
        return new VariableType('var');
    }
}