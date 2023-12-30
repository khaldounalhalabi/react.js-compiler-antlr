import ReactVisitor from "../antlr/ReactVisitor.ts";
import { Statement } from "../ast/Statement.ts";
import {
  AssignmentContext,
  ConsoleLogExpressionContext,
  FunctionDeclarationContext,
  UseEffectContext,
  UseRefContext,
  UseStateContext,
  VariableDeclarationContext,
  VariableTypeContext,
} from "../antlr/ReactParser.ts";
import { VariableDeclaration } from "../ast/statements/VariableDeclaration.ts";
import { VariableType } from "../ast/VariableType.ts";
import { FunctionalExpressionVisitor } from "./FunctionalExpressionVisitor.ts";
import { Identifier } from "../ast/Expressions/Identifier.ts";
import { Expression } from "../ast/Expressions/Expression.ts";
import { Assignment } from "../ast/statements/Assignment.ts";
import { ExpressionVisitor } from "./ExpressionVisitor.ts";
import { ConsoleLogExpression } from "../ast/statements/ConsoleLogExpression.ts";
import { FunctionDeclaration } from "../ast/statements/FunctionDeclaration.ts";
import { ParameterVisitor } from "./ParameterVisitor.ts";
import { BlockVisitor } from "./BlockVisitor.ts";
import { UseEffect } from "../ast/statements/UseEffect.ts";
import { UseRef } from "../ast/statements/UseRef.ts";
import { UseState } from "../ast/statements/UseState.ts";
import { TerminalNode } from "antlr4";
import { Parameter } from "../ast/Parameters.ts";
import { FunctionExpression } from "../ast/Expressions/FunctionalExpression/FunctionExpression.ts";

export class StatementVisitor extends ReactVisitor<Statement> {
  public identifiers: string[] = [];
  public semanticErrors: string[];

  public exprVisitor: ExpressionVisitor;

  public blockVisitor: BlockVisitor;

  public funcExprVisitor: FunctionalExpressionVisitor;

  public parameterVisitor: ParameterVisitor;

  constructor(
    exprVisitor: ExpressionVisitor,
    blockVisitor: BlockVisitor,
    funcExprVisitor: FunctionalExpressionVisitor,
    parameterVisitor: ParameterVisitor,
    semanticErrors: string[],
  ) {
    super();
    this.exprVisitor = exprVisitor;
    this.blockVisitor = blockVisitor;
    this.funcExprVisitor = funcExprVisitor;
    this.parameterVisitor = parameterVisitor;
    this.semanticErrors = semanticErrors;
  }

  visitVariableDeclaration: (
    ctx: VariableDeclarationContext,
  ) => VariableDeclaration = (ctx: VariableDeclarationContext) => {
    console.log("variable declaration visitor");
    let varType: VariableType = this.visit(ctx.variableType());
    let id: Identifier = this.funcExprVisitor.visitID(ctx.Identifier());
    let expression: Expression = this.funcExprVisitor.visit(ctx.expression());
    if (this.identifiers.includes(id.name)) {
      this.semanticErrors.push(
        "Error : Variable" +
          id.name +
          "Already Declared (" +
          ctx.Identifier().line +
          " , " +
          ctx.Identifier().column +
          ")",
      );
    } else if (expression instanceof FunctionExpression) {
      this.identifiers.push(id.name);
    } else {
      this.identifiers.push(id.name);
    }

    return new VariableDeclaration(varType, id, expression);
  };

  visitVariableType: (ctx: VariableTypeContext) => VariableType = (
    ctx: VariableTypeContext,
  ) => {
    let varType: string = ctx.children[0].text;
    return new VariableType(varType);
  };

  visitAssignment: (ctx: AssignmentContext) => Assignment = (
    ctx: AssignmentContext,
  ) => {
    console.log("sssssssssssssssssssssss");
    const idCtx = ctx.Identifier();
    const id = this.funcExprVisitor.visitID(idCtx);
    const expression = this.funcExprVisitor.visit(ctx.expression());

    if (!this.identifiers.includes(id.name)) {
      this.semanticErrors.push(
        "Error : Variable" +
          id.name +
          "Doesn't Declared (" +
          ctx.Identifier().line +
          " , " +
          ctx.Identifier().column +
          ")",
      );
    } else if (expression instanceof FunctionExpression) {
      this.identifiers.push(id.name);
    } else {
      this.identifiers.push(id.name);
    }

    console.log(this.identifiers);

    return new Assignment(id, expression);
  };

  visitConsoleLogExpression: (
    ctx: ConsoleLogExpressionContext,
  ) => ConsoleLogExpression = (ctx: ConsoleLogExpressionContext) => {
    let args = undefined;
    if (ctx.arguments()) {
      args = this.funcExprVisitor.visitArguments(ctx.arguments());
    }

    return new ConsoleLogExpression(args);
  };

  visitFunctionDeclaration: (
    ctx: FunctionDeclarationContext,
  ) => FunctionDeclaration = (ctx: FunctionDeclarationContext) => {
    const id = this.exprVisitor.visitID(ctx.Identifier());
    const parameters: Parameter[] = this.parameterVisitor.visitParameters(
      ctx.parameters(),
    );
    const block = this.blockVisitor.visit(ctx.block());
    return new FunctionDeclaration(id, block, parameters);
  };

  visitUseEffect: (ctx: UseEffectContext) => UseEffect = (
    ctx: UseEffectContext,
  ) => {
    let funcCtx = ctx.functionExpression();
    let func = this.funcExprVisitor.visit(funcCtx);

    let paramCtx = undefined;
    let params = undefined;

    if (ctx.parameters()) {
      paramCtx = ctx.parameters();
      params = this.parameterVisitor.visitParameters(paramCtx);
    }
    return new UseEffect(func, params);
  };

  visitUseRef: (ctx: UseRefContext) => UseRef = (ctx: UseRefContext) => {
    let idCtx = ctx.Identifier();
    let id = this.exprVisitor.visitID(idCtx);

    let exprCtx = undefined;
    let expr = undefined;

    if (ctx.expression()) {
      exprCtx = ctx.expression();
      expr = this.exprVisitor.visit(exprCtx);
    }

    return new UseRef(id, expr);
  };

  visitUseState: (ctx: UseStateContext) => UseState = (
    ctx: UseStateContext,
  ) => {
    const idCtx: TerminalNode[] = ctx.Identifier_list();
    const ids: Identifier[] = [];

    for (let i = 0; i < idCtx.length; i++) {
      ids.push(this.exprVisitor.visitID(idCtx[i]));
    }

    let expression = undefined;
    if (ctx.expression()) {
      expression = this.exprVisitor.visit(ctx.expression());
    }

    return new UseState(ids[0], ids[1], expression);
  };
}
