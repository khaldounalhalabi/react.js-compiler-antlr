import ReactVisitor from "../antlr/ReactVisitor.ts";
import { Statement } from "../ast/Statement.ts";
import { StatementContext } from "../antlr/ReactParser.ts";
import {VariableDeclarationVisitor} from "./StatementsVisitors/VariableDeclaration.ts";

export class StatementVisitor extends ReactVisitor<Statement> {
  visitStatement: (ctx: StatementContext) => Statement = (
    ctx: StatementContext,
  ) => {
    console.log('Statement Visitor')
    let visitor = new VariableDeclarationVisitor();
    let node = visitor.visitVariableDeclaration(ctx.children[0]);
    return new Statement(node);
  };
}
