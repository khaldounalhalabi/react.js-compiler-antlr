import { StatementVisitor } from "./StatementVisitor.ts";
import { BlockContext } from "../antlr/ReactParser.ts";
import { Block } from "../ast/statements/Block.ts";
import { Statement } from "../ast/abstracts/Statement.ts";
import { ReturnVisitor } from "./ReturnVisitor.ts";
import ReactVisitor from "../antlr/ReactVisitor.ts";
import { ExpressionVisitor } from "./ExpressionVisitor.ts";
import { ParameterVisitor } from "./ParameterVisitor.ts";
import { FunctionalExpressionVisitor } from "./FunctionalExpressionVisitor.ts";
import { JsxElementVisitor } from "./JsxElementVisitor.ts";
import { SymbolTable } from "../libs/SymbolTable.ts";

export class BlockVisitor extends ReactVisitor<Block> {
  [x: string]: any;

  public semanticErrors: string[] | undefined;
  public symbolTable: SymbolTable;

  visitBlock: (ctx: BlockContext) => Block = (ctx: BlockContext) => {
    this.semanticErrors = [];
    this.symbolTable = new SymbolTable();

    const statementsCtx = ctx.statement_list();
    const statements: Statement[] = [];

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
      this.semanticErrors,
      this.symbolTable,
    );

    for (let i = 0; i < statementsCtx.length; i++) {
      statements.push(statementVisitor.visit(statementsCtx[i]));
    }

    const returnVisitor = new ReturnVisitor(
      funcExprVisitor,
      new JsxElementVisitor(funcExprVisitor),
    );
    const returnStatement = returnVisitor.visitReturn(ctx.return_());

    return new Block(statements, returnStatement);
  };
}
