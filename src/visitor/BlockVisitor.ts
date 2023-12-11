import { StatementVisitor } from "./StatementVisitor.ts";
import { BlockContext } from "../antlr/ReactParser.ts";
import { Block } from "../ast/Block.ts";
import { Statement } from "../ast/Statement.ts";
import { ReturnVisitor } from "./ReturnVisitor.ts";
import ReactVisitor from "../antlr/ReactVisitor.ts";

export class BlockVisitor extends ReactVisitor<Block> {
  visitBlock: (ctx: BlockContext) => Block = (ctx: BlockContext) => {
    console.log("block visitor");
    const statementsCtx = ctx.statement_list();
    const statements: Statement[] = [];
    const statementVisitor = new StatementVisitor();

    for (let i = 0; i < statementsCtx.length; i++) {
      statements.push(statementVisitor.visit(statementsCtx[i]));
    }

    // TODO::possible problem
    const returnVisitor = new ReturnVisitor();
    const returnStatement = returnVisitor.visitReturn(ctx.return_());

    return new Block(statements, returnStatement);
  };
}
