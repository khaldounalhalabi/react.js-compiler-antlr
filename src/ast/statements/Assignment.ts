import { Identifier } from "../Expressions/Identifier.ts";
import { Expression } from "../abstracts/Expression.ts";
import { Statement } from "../abstracts/Statement.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class Assignment extends Statement {
  identifier: Identifier;
  expression: Expression;

  constructor(identifier: Identifier, expression: Expression) {
    super();
    this.identifier = identifier;
    this.expression = expression;
  }

  toString(): string {
    return `${this.identifier.toString()} = ${this.expression.toString()}`;
  }

  public astNode(): string {
    return `Assignment -> ${this.identifier.astNode()} Assignment -> AssignSymbol Assignment -> ${this.expression.astNode()}`;
  }

  treeObject(): TreeNode {
    return {
      name: "Assignment",
      children: [this.identifier.treeObject(), this.expression.treeObject()],
    };
  }
}
