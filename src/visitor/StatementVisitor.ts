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

export class StatementVisitor extends ReactVisitor<Statement> {
  public exprVisitor: ExpressionVisitor;

  public blockVisitor: BlockVisitor;

  public funcExprVisitor: FunctionalExpressionVisitor;

  public parameterVisitor: ParameterVisitor;

  constructor(
    exprVisitor: ExpressionVisitor,
    blockVisitor: BlockVisitor,
    funcExprVisitor: FunctionalExpressionVisitor,
    parameterVisitor: ParameterVisitor,
  ) {
    super();
    this.exprVisitor = exprVisitor;
    this.blockVisitor = blockVisitor;
    this.funcExprVisitor = funcExprVisitor;
    this.parameterVisitor = parameterVisitor;
  }

  visitVariableDeclaration: (
    ctx: VariableDeclarationContext,
  ) => VariableDeclaration = (ctx: VariableDeclarationContext) => {
    console.log("variable declaration visitor");
    let varType: VariableType = this.visit(ctx.variableType());
    let id: Identifier = this.funcExprVisitor.visitID(ctx.Identifier());
    let expression: Expression = this.funcExprVisitor.visit(ctx.expression());

    return new VariableDeclaration(varType, id, expression);
  };

  visitVariableType: (ctx: VariableTypeContext) => VariableType = (
    ctx: VariableTypeContext,
  ) => {
    console.log("variable type visitor");
    let varType: string = ctx.children[0].text;
    return new VariableType(varType);
  };

  visitAssignment: (ctx: AssignmentContext) => Assignment = (
    ctx: AssignmentContext,
  ) => {
    console.log("visit Assignment");
    const idCtx = ctx.Identifier();
    const id = this.exprVisitor.visitID(idCtx);

    const expression = this.exprVisitor.visit(ctx.expression());
    return new Assignment(id, expression);
  };

  visitConsoleLogExpression: (
    ctx: ConsoleLogExpressionContext,
  ) => ConsoleLogExpression = (ctx: ConsoleLogExpressionContext) => {
    let args = undefined;
    console.log("visit ConsoleLog Expression");
    if (ctx.arguments()) {
      args = this.funcExprVisitor.visitArguments(ctx.arguments());
    }

    return new ConsoleLogExpression(args);
  };

  visitFunctionDeclaration: (
    ctx: FunctionDeclarationContext,
  ) => FunctionDeclaration = (ctx: FunctionDeclarationContext) => {
    console.log("visit Function Declaration");
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
    console.log("visitUseEffect");
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
    console.log("visitUseRef");
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
    console.log("visitUseState");
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
