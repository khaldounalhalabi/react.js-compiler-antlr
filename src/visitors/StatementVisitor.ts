import ReactVisitor from "../antlr/ReactVisitor.ts";
import { Statement } from "../ast/abstracts/Statement.ts";
import {
  AssignmentContext,
  ConsoleLogExpressionContext,
  FunctionCallContext,
  FunctionDeclarationContext,
  UseEffectContext,
  UseRefContext,
  UseStateContext,
  VariableDeclarationContext,
  VariableTypeContext,
} from "../antlr/ReactParser.ts";
import { VariableDeclaration } from "../ast/statements/VariableDeclaration.ts";
import { VariableType } from "../ast/Expressions/VariableType.ts";
import { FunctionalExpressionVisitor } from "./FunctionalExpressionVisitor.ts";
import { Identifier } from "../ast/Expressions/Identifier.ts";
import { Expression } from "../ast/abstracts/Expression.ts";
import { Assignment } from "../ast/statements/Assignment.ts";
import { ExpressionVisitor } from "./ExpressionVisitor.ts";
import { ConsoleLogExpression } from "../ast/statements/ConsoleLogExpression.ts";
import { FunctionDeclaration } from "../ast/statements/FunctionDeclaration.ts";
import { ParameterVisitor } from "./ParameterVisitor.ts";
import { BlockVisitor } from "./BlockVisitor.ts";
import { UseEffect } from "../ast/statements/UseEffect.ts";
import { UseRef } from "../ast/statements/UseRef.ts";
import { UseState } from "../ast/statements/UseState.ts";
// @ts-ignore
import { TerminalNode } from "antlr4";
import { FunctionExpression } from "../ast/Expressions/FunctionalExpression/FunctionExpression.ts";
import { FunctionCall } from "../ast/Expressions/FunctionalExpression/FunctionCall.ts";
import {Arguments} from "../ast/Expressions/Arguments.ts";

export class StatementVisitor extends ReactVisitor<Statement> {
  [x: string]: any;

  public identifiers: Map<string, any>;
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
    identifiers: Map<string, any>,
  ) {
    super();
    this.exprVisitor = exprVisitor;
    this.blockVisitor = blockVisitor;
    this.funcExprVisitor = funcExprVisitor;
    this.parameterVisitor = parameterVisitor;
    this.semanticErrors = semanticErrors;
    this.identifiers = identifiers;
  }

  visitVariableDeclaration: (
    ctx: VariableDeclarationContext,
  ) => VariableDeclaration = (ctx: VariableDeclarationContext) => {
    let varType: VariableType = this.visitVariableType(ctx.variableType());
    let id: Identifier = this.funcExprVisitor.visitID(ctx.Identifier());
    let expression: Expression = this.funcExprVisitor.visit(ctx.expression());
    if (this.identifiers.has(id.name)) {
      this.semanticErrors.push(
        "Error : Variable " +
          id.name +
          " Already Declared (" +
          ctx.start.line +
          " , " +
          ctx.start.column +
          ")",
      );
    } else if (expression instanceof FunctionExpression) {
      this.identifiers.set(id.name, expression);
    } else {
      this.identifiers.set(id.name, expression);
    }

    return new VariableDeclaration(varType, id, expression);
  };

  visitVariableType: (ctx: VariableTypeContext) => VariableType = (
    ctx: VariableTypeContext,
  ) => {
    // @ts-ignore
    let varType: string = ctx.getText();
    return new VariableType(varType);
  };

  visitAssignment: (ctx: AssignmentContext) => Assignment = (
    ctx: AssignmentContext,
  ) => {
    const idCtx = ctx.Identifier();
    const id = this.funcExprVisitor.visitID(idCtx);
    const expression = this.funcExprVisitor.visit(ctx.expression());

    if (!this.identifiers.has(id.name)) {
      this.semanticErrors.push(
        "Error : Variable " +
          id.name +
          " Doesn't Declared (" +
          ctx.start.line +
          " , " +
          ctx.start.column +
          ")",
      );
    }
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
    let parameters = undefined;
    if (ctx.parameters()) {
      parameters = this.parameterVisitor.visitParameters(ctx.parameters());
    }
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

  visitFunctionCall: (ctx: FunctionCallContext) => FunctionCall = (
    ctx: FunctionCallContext,
  ) => {
    let id = this.exprVisitor.visitID(ctx.Identifier());
    let args:Arguments|undefined = undefined;
    if (ctx.arguments()){
      args = this.funcExprVisitor.visitArguments(ctx.arguments());
    }
    return new FunctionCall(id, args);
  };
}
