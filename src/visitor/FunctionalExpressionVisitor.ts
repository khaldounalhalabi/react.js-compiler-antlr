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
  visitArrowFunction: (ctx: ArrowFunctionContext) => ArrowFunction = (
    ctx: ArrowFunctionContext,
  ) => {
    console.log("arrow function visitor");
    // TODO::possible problem
    const parametersVisitor = new ParameterVisitor();
    const parameters = parametersVisitor.visitParameters(ctx.parameters());

    // TODO::possible problem
    const blockVisitor = new BlockVisitor();
    const block = blockVisitor.visitBlock(ctx.block());

    return new ArrowFunction(parameters, block);
  };

  visitFunctionExpression: (
    ctx: FunctionExpressionContext,
  ) => FunctionExpression = (ctx: FunctionExpressionContext) => {
    console.log("function expression visitor");
    // TODO::possible problem
    const parametersVisitor = new ParameterVisitor();
    const parameters = parametersVisitor.visitParameters(ctx.parameters());

    // TODO::possible problem
    const blockVisitor = new BlockVisitor();
    const block = blockVisitor.visitBlock(ctx.block());

    return new FunctionExpression(parameters, block);
  };

  visitFunctionCall: (ctx: FunctionCallContext) => FunctionCall = (
    ctx: FunctionCallContext,
  ) => {
    console.log("function call visitor");

    let id = this.visitID(ctx.Identifier());
    const args = this.visitArguments(ctx.arguments());
    return new FunctionCall(id, args);
  };

  visitArguments: (ctx: ArgumentsContext) => Arguments = (
    ctx: ArgumentsContext,
  ) => {
    console.log("arguments visitor");

    const expressionCtx = ctx.expression_list();
    let expressions: Expression[] = [];

    for (let i = 0; i < expressionCtx.length; i++) {
      expressions.push(this.visit(expressionCtx[i]));
    }

    return new Arguments(expressions);
  };
}
