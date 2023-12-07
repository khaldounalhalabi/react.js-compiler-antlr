import {VariableDeclaration} from "../../ast/statements/VariableDeclaration.ts";
import {VariableDeclarationContext} from "../../antlr/ReactParser.ts";
import ReactVisitor from "../../antlr/ReactVisitor.ts";

export class VariableDeclarationVisitor extends ReactVisitor<VariableDeclaration> {

    visitVariableDeclaration: (ctx: VariableDeclarationContext) => VariableDeclaration = (ctx: VariableDeclarationContext) => {

        const idToken = ctx.Identifier();
        const type = ctx.variableType().accept(this);
        const value: string = ctx.expression();

        return new VariableDeclaration(this.visitVariableType(type), idToken, value); // Or return your own result
    }
}