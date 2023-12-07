import ReactVisitor from "../antlr/ReactVisitor.ts";
import {VariableType} from "../ast/VariableType.ts";
import {VariableTypeContext} from "../antlr/ReactParser.ts";

export class VariableTypeVisitor extends ReactVisitor<VariableType> {
    visitVariableType: (ctx: VariableTypeContext) => VariableType = (ctx: VariableTypeContext) => {
        const type = ctx
        return new VariableType();
    }
}