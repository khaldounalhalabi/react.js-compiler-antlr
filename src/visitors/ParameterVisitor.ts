// @ts-ignore
import { TerminalNode } from "antlr4";
import ReactVisitor from "../antlr/ReactVisitor.ts";
import { Parameter } from "../ast/Expressions/Parameters.ts";
import { ParametersContext } from "../antlr/ReactParser.ts";
import { Identifier } from "../ast/Expressions/Identifier.ts";
import { ExpressionVisitor } from "./ExpressionVisitor.ts";

export class ParameterVisitor extends ReactVisitor<Parameter[]> {
  public exprVisitor;

  constructor(exprVisitor: ExpressionVisitor) {
    super();
    this.exprVisitor = exprVisitor;
  }

  visitParameters: (ctx: ParametersContext) => Parameter[] = (
    ctx: ParametersContext,
  ) => {
    const identifiers: TerminalNode = ctx.Identifier_list();
    const parameters: Parameter[] = [];
    const expressionVisitor: ExpressionVisitor = new ExpressionVisitor();
    for (let i: number = 0; i < identifiers.length; i++) {
      let id: Identifier = expressionVisitor.visitID(identifiers[i]);
      parameters.push(new Parameter(id));
    }

    return parameters;
  };
}
