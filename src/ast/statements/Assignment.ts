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

  treeObject(): TreeNode {
    return {
      name: "Assignment",
      children: [this.identifier.treeObject(), this.expression.treeObject()],
    };
  }

  resolve(): string {
    return `${this.identifier.resolve()} =  ${this.expression.resolve()}`;
  }
}
