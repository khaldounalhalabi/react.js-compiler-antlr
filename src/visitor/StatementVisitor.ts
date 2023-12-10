import { InstructionVisitor } from "./InstructionVisitor.ts";
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

export class StatementVisitor extends ReactVisitor<Statement> {
  visitVariableDeclaration: (
    ctx: VariableDeclarationContext,
  ) => VariableDeclaration = (ctx: VariableDeclarationContext) => {
    console.log("variable declaration visitor");
    let varType: VariableType = this.visit(ctx.variableType());
    // TODO::possible problem
    let expressionVisitor = new FunctionalExpressionVisitor();
    let id: Identifier = expressionVisitor.visitID(ctx.Identifier());
    let expression: Expression = expressionVisitor.visit(ctx.expression());

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
    const exprVisitor = new ExpressionVisitor();
    const idCtx = ctx.Identifier();
    // TODO::possible problem
    const id = exprVisitor.visitID(idCtx);

    const expression = exprVisitor.visit(ctx.expression());
    return new Assignment(id, expression);
  };

  visitConsoleLogExpression: (
    ctx: ConsoleLogExpressionContext,
  ) => ConsoleLogExpression = (ctx: ConsoleLogExpressionContext) => {
    let args = undefined;

    if (ctx.arguments()) {
      // TODO::possible problem
      args = new FunctionalExpressionVisitor().visitArguments(ctx.arguments());
    }

    return new ConsoleLogExpression(args);
  };

  visitFunctionDeclaration: (
    ctx: FunctionDeclarationContext,
  ) => FunctionDeclaration = (ctx: FunctionDeclarationContext) => {
    // TODO:: possible problem
    const id = new ExpressionVisitor().visitID(ctx.Identifier());
    const parameters = new ParameterVisitor().visit(ctx.parameters());
    const block = new BlockVisitor().visit(ctx.block());
    return new FunctionDeclaration(id, parameters, block);
  };

  visitUseEffect: (ctx: UseEffectContext) => UseEffect = (
    ctx: UseEffectContext,
  ) => {
    let funcCtx = ctx.functionExpression();
    let func = new FunctionalExpressionVisitor().visit(funcCtx);

    let paramCtx = undefined;
    let params = undefined;

    if (ctx.parameters()) {
      paramCtx = ctx.parameters();
      params = new ParameterVisitor().visitParameters(paramCtx);
    }
    return new UseEffect(func, params);
  };

  visitUseRef: (ctx: UseRefContext) => UseRef = (ctx: UseRefContext) => {
    let exprVisitor = new ExpressionVisitor();
    let idCtx = ctx.Identifier();
    let id = exprVisitor.visitID(idCtx);

    let exprCtx = undefined;
    let expr = undefined;

    if (ctx.expression()) {
      exprCtx = ctx.expression();
      expr = exprVisitor.visit(exprCtx);
    }

    return new UseRef(id, expr);
  };

  visitUseState: (ctx: UseStateContext) => UseState = (
    ctx: UseStateContext,
  ) => {
    const exprVisitor = new ExpressionVisitor();
    const idCtx: TerminalNode[] = ctx.Identifier_list();
    const ids: Identifier[] = [];

    for (let i = 0; i < idCtx.length; i++) {
      ids.push(exprVisitor.visitID(idCtx[i]));
    }

    let expression = undefined;
    if (ctx.expression()) {
      expression = exprVisitor.visit(ctx.expression());
    }

    return new UseState(ids[0], ids[1], expression);
  };
}
