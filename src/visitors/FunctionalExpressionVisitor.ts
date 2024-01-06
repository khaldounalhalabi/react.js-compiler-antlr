import {
  ArgumentsContext,
  ArrowFunctionContext,
  FuncExprContext,
  FunctionalExpressionContext,
  FunctionCallContext,
  FunctionExpressionContext,
} from "../antlr/ReactParser.ts";
import { ArrowFunction } from "../ast/Expressions/FunctionalExpression/ArrowFunction.ts";
import { ParameterVisitor } from "./ParameterVisitor.ts";
import { BlockVisitor } from "./BlockVisitor.ts";
import { FunctionExpression } from "../ast/Expressions/FunctionalExpression/FunctionExpression.ts";
import { FunctionCall } from "../ast/Expressions/FunctionalExpression/FunctionCall.ts";
import { Arguments } from "../ast/Expressions/Arguments.ts";
import { Expression } from "../ast/abstracts/Expression.ts";
import {FunctionalExpression} from "../ast/Expressions/FunctionalExpression/FunctionalExpression.ts";
import {FuncExpr} from "../ast/Expressions/FunctionalExpression/FuncExpr.ts";
import {ExpressionVisitor} from "./ExpressionVisitor.ts";

export class FunctionalExpressionVisitor extends ExpressionVisitor {
  public blockVisitor: BlockVisitor;

  public parameterVisitor: ParameterVisitor;

  constructor(blockVisitor: BlockVisitor, parameterVisitor: ParameterVisitor) {
    super();
    this.blockVisitor = blockVisitor;
    this.parameterVisitor = parameterVisitor;
  }

  visitArrowFunction: (ctx: ArrowFunctionContext) => ArrowFunction = (
    ctx: ArrowFunctionContext,
  ) => {
    const parameters = ctx.parameters() ? this.parameterVisitor.visitParameters(ctx.parameters()) : [];

    const block = this.blockVisitor.visitBlock(ctx.block());

    return new ArrowFunction(parameters, block);
  };

  visitFunctionExpression: (
    ctx: FunctionExpressionContext,
  ) => FunctionExpression = (ctx: FunctionExpressionContext) => {
    const parameters = this.parameterVisitor.visitParameters(ctx.parameters());

    const block = this.blockVisitor.visitBlock(ctx.block());

    return new FunctionExpression(parameters, block);
  };

  visitFunctionCall: (ctx: FunctionCallContext) => FunctionCall = (
    ctx: FunctionCallContext,
  ) => {
    let id = this.visitID(ctx.Identifier());
    const args = this.visitArguments(ctx.arguments());
    return new FunctionCall(id, args);
  };

  visitArguments: (ctx: ArgumentsContext) => Arguments = (
    ctx: ArgumentsContext,
  ) => {
    const expressionCtx = ctx.expression_list();
    let expressions: Expression[] = [];

    for (let i = 0; i < expressionCtx.length; i++) {
      expressions.push(this.visit(expressionCtx[i]));
    }

    return new Arguments(expressions);
  };

  visitFunctionalExpression: (ctx: FunctionalExpressionContext) => FunctionalExpression =
    (ctx: FunctionalExpressionContext) => {
      return new FunctionalExpression(this.visit(ctx.funcExpr()));
    };

  visitFuncExpr: (ctx: FuncExprContext) => FuncExpr = (
    ctx: FuncExprContext,
  ) => {
    if (ctx.functionCall()) {
      return new FuncExpr(this.visitFunctionCall(ctx.functionCall()));
    } else if (ctx.arrowFunction()) {
      return new FuncExpr(this.visitArrowFunction(ctx.arrowFunction()));
    } else {
      return new FuncExpr(
        this.visitFunctionExpression(ctx.functionExpression()),
      );
    }
  };
}
