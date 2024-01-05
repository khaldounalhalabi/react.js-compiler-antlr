import { Expression } from "../abstracts/Expression.ts";
import { Identifier } from "../Expressions/Identifier.ts";
import { VariableType } from "../Expressions/VariableType.ts";
import { Statement } from "../abstracts/Statement.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class VariableDeclaration extends Statement {
  variableType: VariableType;
  identifier: Identifier;
  expression: Expression | null;

  constructor(
    variableType: VariableType,
    identifier: Identifier,
    expression: Expression | null,
  ) {
    super();
    this.variableType = variableType;
    this.identifier = identifier;
    this.expression = expression;
  }

  toString(): string {
    const expressionStr = this.expression
      ? ` = ${this.expression.toString()}`
      : "";
    return `${this.variableType.toString()} ${this.identifier.toString()}${expressionStr}`;
  }

  public astNode(): string {
    return `VariableDeclaration -> ${this.variableType.astNode()} VariableDeclaration -> ${this.identifier.astNode()} ${
      this.expression
        ? `VariableDeclaration -> ${this.expression?.astNode()}`
        : ""
    }`;
  }

  treeObject(): TreeNode {
    return this.expression
      ? {
          name: "Variable Declaration",
          children: [
            this.variableType.treeObject(),
            this.identifier.treeObject(),
            this.expression?.treeObject(),
          ],
        }
      : {
          name: "Variable Declaration",
          children: [
            this.variableType.treeObject(),
            this.identifier.treeObject(),
          ],
        };
  }
}
