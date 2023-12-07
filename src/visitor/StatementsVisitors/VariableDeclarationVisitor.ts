import {VariableDeclaration} from "../../ast/statements/VariableDeclaration.ts";
import {VariableDeclarationContext} from "../../antlr/ReactParser.ts";
import ReactVisitor from "../../antlr/ReactVisitor.ts";

export class VariableDeclarationVisitor extends ReactVisitor<VariableDeclaration> {

    visitVariableDeclaration: (ctx: VariableDeclarationContext) => VariableDeclaration = (ctx: VariableDeclarationContext) => {

        return new VariableDeclaration()
    }
}