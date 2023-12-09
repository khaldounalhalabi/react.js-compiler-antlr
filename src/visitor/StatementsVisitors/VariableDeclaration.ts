import { VariableDeclaration } from "../../ast/statements/VariableDeclaration.ts";
import ReactVisitor from "../../antlr/ReactVisitor.ts";
import { VariableDeclarationContext } from "../../antlr/ReactParser.ts";
import { VariableType } from "../../ast/VariableType.ts";
import { Identifier } from "../../ast/Expressions/Identifier.ts";
import { Expression } from "../../ast/Expressions/Expression.ts";
import { VariableTypeVisitor } from "../VariableTypeVisitor.ts";
import { IdentifierVisitor } from "../ExpressionsVisitors/IdentifierVisitor.ts";
import { ExpressionVisitor } from "../ExpressionsVisitors/ExpressionVisitor.ts";

export class VariableDeclarationVisitor extends ReactVisitor<VariableDeclaration> {
  visitVariableDeclaration: (
    ctx: VariableDeclarationContext,
  ) => VariableDeclaration = (ctx: VariableDeclarationContext) => {
    console.log("variable declaration visitor");
    let varType: VariableType = new VariableTypeVisitor().visitVariableType(
      ctx.variableType(),
    );
    let id: Identifier = new IdentifierVisitor().visitIdentifier(
      ctx.children[1],
    );
    let expression: Expression = new ExpressionVisitor().visitExpression(
      ctx.expression(),
    );

    return new VariableDeclaration(varType, id, expression);
  };
}
