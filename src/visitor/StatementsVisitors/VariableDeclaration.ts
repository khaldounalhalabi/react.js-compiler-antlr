import ReactVisitor from "../../antlr/ReactVisitor.ts";
import {VariableDeclarationContext} from "../../antlr/ReactParser.ts";
import {VariableDeclaration} from "../../ast/statements/VariableDeclaration.ts";
import {VariableTypeVisitor} from "../VariableTypeVisitor.ts";

export class VariableDeclarationVisitor extends ReactVisitor<VariableDeclaration> {
    visitVariableDeclaration: (ctx: VariableDeclarationContext) => VariableDeclarationContext = (ctx: VariableDeclarationContext) => {
        return new VariableDeclaration(
            (new VariableTypeVisitor('var').visitVariableType(ctx.children[0])),
            this.visitIdentifier(ctx.chldren[1]),
            this.visitFunctionExpression(ctx.children[2])
        )
    }
}