import ReactVisitor from "../antlr/ReactVisitor.ts";
import { Program } from "../ast/Program.ts";
import { ProgramContext } from "../antlr/ReactParser.ts";
import { Statement } from "../ast/Statement.ts";
import { StatementVisitor } from "./StatementVisitor.ts";
import { ExpressionVisitor } from "./ExpressionVisitor.ts";
import { ReturnVisitor } from "./ReturnVisitor.ts";
import { ParameterVisitor } from "./ParameterVisitor.ts";
import { JsxElementVisitor } from "./JsxElementVisitor.ts";
import { FunctionalExpressionVisitor } from "./FunctionalExpressionVisitor.ts";
import { BlockVisitor } from "./BlockVisitor.ts";

export class ProgramVisitor extends ReactVisitor<Program> {
  public semanticErrors: string[] = [];

  public exprVisitor;

  public blockVisitor;

  public funcExprVisitor;

  public jsxElementVisitor;

  public parameterVisitor;

  public returnVisitor;

  public statementVisitor;

  constructor() {
    super();
    this.returnVisitor = new ReturnVisitor();
    this.blockVisitor = new BlockVisitor();
    this.exprVisitor = new ExpressionVisitor();
    this.jsxElementVisitor = new JsxElementVisitor(this.exprVisitor);
    this.parameterVisitor = new ParameterVisitor(this.exprVisitor);
    this.funcExprVisitor = new FunctionalExpressionVisitor(
      this.blockVisitor,
      this.parameterVisitor,
    );
    this.statementVisitor = new StatementVisitor(
      this.exprVisitor,
      this.blockVisitor,
      this.funcExprVisitor,
      this.parameterVisitor,
      this.semanticErrors,
    );
  }

  visitProgram: (ctx: ProgramContext) => Program = (ctx: ProgramContext) => {
    let statement: Statement = this.statementVisitor.visit(ctx.children[0]);
    let statements: Statement[] = [statement];
    return new Program(statements);
  };
}
