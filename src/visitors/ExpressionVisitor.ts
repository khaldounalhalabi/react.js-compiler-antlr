import {
  AdditionContext,
  DivisionContext,
  EqualContext,
  ExpressionContext,
  IDContext,
  LessThanContext,
  LessThanOrEqualContext,
  MoreThanContext,
  MoreThanOrEqualContext,
  MultiplicationContext,
  NotEqualContext,
  NumberContext,
  StringContext,
  SubtractionContext,
  TemplateContext,
  TemplateStringContext,
} from "../antlr/ReactParser.ts";
import { Expression } from "../ast/abstracts/Expression.ts";
import { String as AntlrString } from "../ast/Expressions/String.ts";
import ReactVisitor from "../antlr/ReactVisitor.ts";
import { Addition } from "../ast/Expressions/Addition.ts";
import { Division } from "../ast/Expressions/Division.ts";
import { Equal } from "../ast/Expressions/Equal.ts";
import { Identifier } from "../ast/Expressions/Identifier.ts";
import { LessThanOrEqual } from "../ast/Expressions/LessThanOrEqual.ts";
import { LessThan } from "../ast/Expressions/LessThan.ts";
import { MoreThanOrEqual } from "../ast/Expressions/MoreThanOrEqual.ts";
import { MoreThan } from "../ast/Expressions/MoreThan.ts";
import { Multiplication } from "../ast/Expressions/Multiplication.ts";
import { NotEqual } from "../ast/Expressions/NotEqual.ts";
import { Number as AntlrNumber } from "../ast/Expressions/Number.ts";
import { Subtraction } from "../ast/Expressions/Subtraction.ts";
import { TemplateString } from "../ast/Expressions/TemplateString.ts";

export class ExpressionVisitor extends ReactVisitor<Expression> {
  [x: string]: any;
  visitAddition: (ctx: AdditionContext) => Addition = (
    ctx: AdditionContext,
  ) => {
    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new Addition(left, right);
  };

  visitDivision: (ctx: DivisionContext) => Division = (
    ctx: DivisionContext,
  ) => {
    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new Division(left, right);
  };

  visitEqual: (ctx: EqualContext) => Equal = (ctx: EqualContext) => {
    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new Equal(left, right);
  };

  visitID: (ctx: IDContext) => Identifier = (ctx: IDContext) => {
    // @ts-ignore
    let id: string = ctx.getText();
    return new Identifier(id);
  };

  visitLessThanOrEqual: (ctx: LessThanOrEqualContext) => LessThanOrEqual = (
    ctx: LessThanOrEqualContext,
  ) => {
    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new LessThanOrEqual(left, right);
  };

  visitLessThan: (ctx: LessThanContext) => LessThan = (
    ctx: LessThanContext,
  ) => {
    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new LessThan(left, right);
  };

  visitMoreThanOrEqual: (ctx: MoreThanOrEqualContext) => MoreThanOrEqual = (
    ctx: MoreThanOrEqualContext,
  ) => {
    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new MoreThanOrEqual(left, right);
  };

  visitMoreThan: (ctx: MoreThanContext) => MoreThan = (
    ctx: MoreThanContext,
  ) => {
    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new MoreThan(left, right);
  };

  visitMultiplication: (ctx: MultiplicationContext) => Multiplication = (
    ctx: MultiplicationContext,
  ) => {
    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new Multiplication(left, right);
  };

  visitNotEqual: (ctx: NotEqualContext) => NotEqual = (
    ctx: NotEqualContext,
  ) => {
    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new NotEqual(left, right);
  };

  visitNumber: (ctx: NumberContext) => AntlrNumber = (ctx: NumberContext) => {
    let strNum = ctx.IntegerLiteral().getText();
    let num = parseInt(strNum);

    return new AntlrNumber(num);
  };

  visitString: (ctx: StringContext) => AntlrString = (ctx: StringContext) => {
    let str = ctx.getText();
    return new AntlrString(str);
  };

  visitSubtraction: (ctx: SubtractionContext) => Subtraction = (
    ctx: SubtractionContext,
  ) => {
    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new Subtraction(left, right);
  };

  visitTemplateString: (ctx: TemplateStringContext) => TemplateString = (
    ctx: TemplateStringContext,
  ) => {
    return this.visitTemplate(ctx.template());
  };

  visitTemplate: (ctx: TemplateContext) => TemplateString = (
    ctx: TemplateContext,
  ) => {
    let expressionCtx: ExpressionContext = ctx.expression();
    let expression: Expression = this.visit(expressionCtx);

    return new TemplateString(expression);
  };
}
