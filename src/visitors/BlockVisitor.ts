import { StatementVisitor } from "./StatementVisitor.ts";
import { BlockContext } from "../antlr/ReactParser.ts";
import { Block } from "../ast/statements/Block.ts";
import { Statement } from "../ast/statements/Statement.ts";
import { ReturnVisitor } from "./ReturnVisitor.ts";
import ReactVisitor from "../antlr/ReactVisitor.ts";
import { ExpressionVisitor } from "./ExpressionVisitor.ts";
import { ParameterVisitor } from "./ParameterVisitor.ts";
import { FunctionalExpressionVisitor } from "./FunctionalExpressionVisitor.ts";
import { JsxElementVisitor } from "./JsxElementVisitor.ts";
import { SymbolTable } from "../libs/SymbolTable.ts";

export class BlockVisitor extends ReactVisitor<Block> {
  visitBlock: (ctx: BlockContext) => Block = (ctx: BlockContext) => {
    this.semanticErrors = [];
    this.symbolTable = new SymbolTable();

    const statementsCtx = ctx.statement_list();
    let statements: Statement[] = [];

    const expressionVisitor = new ExpressionVisitor();
    const parameterVisitor = new ParameterVisitor(expressionVisitor);
    const funcExprVisitor = new FunctionalExpressionVisitor(
      this,
      parameterVisitor,
    );

    const statementVisitor = new StatementVisitor(
      expressionVisitor,
      this,
      funcExprVisitor,
      parameterVisitor,
    );
    statements = statementsCtx.map((stCtx) => statementVisitor.visit(stCtx));

    const returnVisitor = new ReturnVisitor(
      funcExprVisitor,
      new JsxElementVisitor(funcExprVisitor),
    );
    const returnStatement = returnVisitor.visitReturn(ctx.return_());

    return new Block(statements, returnStatement);
  };
}
