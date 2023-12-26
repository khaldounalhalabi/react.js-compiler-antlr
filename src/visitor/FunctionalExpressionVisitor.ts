import {
  ArgumentsContext,
  ArrowFunctionContext,
  FunctionCallContext,
  FunctionExpressionContext,
} from "../antlr/ReactParser.ts";
import { ArrowFunction } from "../ast/Expressions/FunctionalExpression/ArrowFunction.ts";
import { ParameterVisitor } from "./ParameterVisitor.ts";
import { BlockVisitor } from "./BlockVisitor.ts";
import { FunctionExpression } from "../ast/Expressions/FunctionalExpression/FunctionExpression.ts";
import { FunctionCall } from "../ast/Expressions/FunctionalExpression/FunctionCall.ts";
import { ExpressionVisitor } from "./ExpressionVisitor.ts";
import { Arguments } from "../ast/Arguments.ts";
import { Expression } from "../ast/Expressions/Expression.ts";

export class FunctionalExpressionVisitor extends ExpressionVisitor {
  public blockVisitor: BlockVisitor;

  public parameterVisitor: ParameterVisitor;

  constructor(
    blockVisitor: BlockVisitor,
    parameterVisitor: ParameterVisitor,
  ) {
    super();
    this.blockVisitor = blockVisitor;
    this.parameterVisitor = parameterVisitor;
  }

  visitArrowFunction: (ctx: ArrowFunctionContext) => ArrowFunction = (
    ctx: ArrowFunctionContext,
  ) => {
    const parameters = this.parameterVisitor.visitParameters(ctx.parameters());

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
}
