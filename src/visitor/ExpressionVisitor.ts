import {
  AdditionContext,
  ArrowFunctionContext,
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
import { Expression } from "../ast/Expressions/Expression.ts";
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
import { BlockVisitor } from "./BlockVisitor.ts";
import { FunctionalExpressionVisitor } from "./FunctionalExpressionVisitor.ts";
import { JsxElementVisitor } from "./JsxElementVisitor.ts";
import { ParameterVisitor } from "./ParameterVisitor.ts";
import { ReturnVisitor } from "./ReturnVisitor.ts";

export class ExpressionVisitor extends ReactVisitor<Expression> {
  visitAddition: (ctx: AdditionContext) => Addition = (
    ctx: AdditionContext,
  ) => {
    console.log("visit Addition");
    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new Addition(left, right);
  };

  visitDivision: (ctx: DivisionContext) => Division = (
    ctx: DivisionContext,
  ) => {
    console.log("division visitor");
    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new Division(left, right);
  };

  visitEqual: (ctx: EqualContext) => Equal = (ctx: EqualContext) => {
    console.log("equal visitor");
    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new Equal(left, right);
  };

  visitID: (ctx: IDContext) => Identifier = (ctx: IDContext) => {
    console.log("visit Identifier");
    let id: string = ctx.getText();
    return new Identifier(id);
  };

  visitLessThanOrEqual: (ctx: LessThanOrEqualContext) => LessThanOrEqual = (
    ctx: LessThanOrEqualContext,
  ) => {
    console.log("less than or equal visitor");
    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new LessThanOrEqual(left, right);
  };

  visitLessThan: (ctx: LessThanContext) => LessThan = (
    ctx: LessThanContext,
  ) => {
    console.log("less than visitor");

    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new LessThan(left, right);
  };

  visitMoreThanOrEqual: (ctx: MoreThanOrEqualContext) => MoreThanOrEqual = (
    ctx: MoreThanOrEqualContext,
  ) => {
    console.log("more than or equal visitor");

    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new MoreThanOrEqual(left, right);
  };

  visitMoreThan: (ctx: MoreThanContext) => MoreThan = (
    ctx: MoreThanContext,
  ) => {
    console.log("more than visitor");
    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new MoreThan(left, right);
  };

  visitMultiplication: (ctx: MultiplicationContext) => Multiplication = (
    ctx: MultiplicationContext,
  ) => {
    console.log("multiplication visitor");

    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new Multiplication(left, right);
  };

  visitNotEqual: (ctx: NotEqualContext) => NotEqual = (
    ctx: NotEqualContext,
  ) => {
    console.log("not equal visitor");

    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new NotEqual(left, right);
  };

  visitNumber: (ctx: NumberContext) => AntlrNumber = (ctx: NumberContext) => {
    console.log("number visitor");
    let strNum = ctx.IntegerLiteral().getText();
    let num = parseInt(strNum);

    return new AntlrNumber(num);
  };

  visitString: (ctx: StringContext) => AntlrString = (ctx: StringContext) => {
    console.log("string visitor");

    let str = ctx.StringLiteral().getText();
    return new AntlrString(str);
  };

  visitSubtraction: (ctx: SubtractionContext) => Subtraction = (
    ctx: SubtractionContext,
  ) => {
    console.log("subtraction visitor");

    let expressions: ExpressionContext[] = ctx.expression_list();
    let left: Expression = this.visit(expressions[0]);
    let right: Expression = this.visit(expressions[1]);

    return new Subtraction(left, right);
  };

  visitTemplateString: (ctx: TemplateStringContext) => TemplateString = (
    ctx: TemplateStringContext,
  ) => {
    console.log("template string visitor");

    return this.visitTemplate(ctx.template());
  };

  visitTemplate: (ctx: TemplateContext) => TemplateString = (
    ctx: TemplateContext,
  ) => {
    console.log("template visitor");

    let expressionCtx: ExpressionContext = ctx.expression();
    let expression: Expression = this.visit(expressionCtx);

    return new TemplateString(expression);
  };
}
