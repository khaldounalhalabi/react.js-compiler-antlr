import ReactVisitor from "../antlr/ReactVisitor.ts";
import { Program } from "../ast/Program.ts";
import { ProgramContext } from "../antlr/ReactParser.ts";
import { Statement } from "../ast/statements/Statement.ts";
import { StatementVisitor } from "./StatementVisitor.ts";
import { ExpressionVisitor } from "./ExpressionVisitor.ts";
import { ReturnVisitor } from "./ReturnVisitor.ts";
import { ParameterVisitor } from "./ParameterVisitor.ts";
import { JsxElementVisitor } from "./JsxElementVisitor.ts";
import { FunctionalExpressionVisitor } from "./FunctionalExpressionVisitor.ts";
import { BlockVisitor } from "./BlockVisitor.ts";
import { SymbolTable } from "../libs/SymbolTable.ts";

export class ProgramVisitor extends ReactVisitor<Program> {
  public exprVisitor;

  public blockVisitor;

  public funcExprVisitor;

  public jsxElementVisitor;

  public parameterVisitor;

  public returnVisitor;

  public statementVisitor;

  public symbolTable: SymbolTable;

  constructor() {
    super();
    this.symbolTable = SymbolTable.make();
    this.blockVisitor = new BlockVisitor(this.symbolTable);
    this.exprVisitor = new ExpressionVisitor();
    this.parameterVisitor = new ParameterVisitor(this.exprVisitor);
    this.funcExprVisitor = new FunctionalExpressionVisitor(
      this.blockVisitor,
      this.parameterVisitor,
    );
    this.jsxElementVisitor = new JsxElementVisitor(this.funcExprVisitor);
    this.returnVisitor = new ReturnVisitor(
      this.funcExprVisitor,
      this.jsxElementVisitor,
    );
    this.statementVisitor = new StatementVisitor(
      this.exprVisitor,
      this.blockVisitor,
      this.funcExprVisitor,
      this.parameterVisitor,
      this.symbolTable,
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
