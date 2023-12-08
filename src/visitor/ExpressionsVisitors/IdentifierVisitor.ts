import ReactVisitor from "../../antlr/ReactVisitor.ts";
import {Identifier} from "../../ast/Expressions/Identifier.ts";
import {IdentifierContext} from "../../antlr/ReactParser.ts";

export class IdentifierVisitor extends ReactVisitor<Identifier> {
    visitIdentifier: (ctx: IdentifierContext) => Identifier = (ctx: IdentifierContext) => {
        let id: string = ctx.Identifier().getText();
        return new Identifier(id);
    }
}