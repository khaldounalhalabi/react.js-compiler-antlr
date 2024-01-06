import ReactVisitor from "../antlr/ReactVisitor.ts";
import { Program } from "../ast/Program.ts";
import {
  ProgramContext,
} from "../antlr/ReactParser.ts";
import { Statement } from "../ast/abstracts/Statement.ts";
import { StatementVisitor } from "./StatementVisitor.ts";
import { ExpressionVisitor } from "./ExpressionVisitor.ts";
import { ReturnVisitor } from "./ReturnVisitor.ts";
import { ParameterVisitor } from "./ParameterVisitor.ts";
import { JsxElementVisitor } from "./JsxElementVisitor.ts";
import { FunctionalExpressionVisitor } from "./FunctionalExpressionVisitor.ts";
import { BlockVisitor } from "./BlockVisitor.ts";

export class ProgramVisitor extends ReactVisitor<Program> {
  [x: string]: any;

  public semanticErrors: string[] = [];

  public identifiers: Map<string, any>;

  public exprVisitor;

  public blockVisitor;

  public funcExprVisitor;

  public jsxElementVisitor;

  public parameterVisitor;

  public returnVisitor;

  public statementVisitor;

  constructor() {
    super();
    this.blockVisitor = new BlockVisitor();
    this.exprVisitor = new ExpressionVisitor();
    this.parameterVisitor = new ParameterVisitor(this.exprVisitor);
    this.funcExprVisitor = new FunctionalExpressionVisitor(
      this.blockVisitor,
      this.parameterVisitor,
    );
    this.jsxElementVisitor = new JsxElementVisitor(this.funcExprVisitor);
    this.returnVisitor = new ReturnVisitor(this.funcExprVisitor , this.jsxElementVisitor);
    this.identifiers = new Map<string, any>();
    this.statementVisitor = new StatementVisitor(
      this.exprVisitor,
      this.blockVisitor,
      this.funcExprVisitor,
      this.parameterVisitor,
      this.semanticErrors,
      this.identifiers,
    );
  }

  visitProgram: (ctx: ProgramContext) => Program = (ctx: ProgramContext) => {
    let statements: Statement[] = [];
    ctx.statement_list().forEach((st) => {
      statements.push(this.statementVisitor.visit(st));
    });
    return new Program(statements);
  };
}
