import { Statement } from "../abstracts/Statement.ts";
import { Identifier } from "../Expressions/Identifier.ts";
import { Expression } from "../abstracts/Expression.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class UseRef extends Statement {
  public identifier: Identifier;

  public expression?: Expression;

  constructor(identifier: Identifier, expression?: Expression) {
    super();
    this.identifier = identifier;

    if (expression) this.expression = expression;
  }

  public toString() {
    return `const ${this.identifier.toString()} = useRef(${
      this.expression?.toString() ?? ""
    })`;
  }

  treeObject(): TreeNode {
    return this.expression
      ? {
          name: "UseRef",
          children: [
            this.identifier.treeObject(),
            this.expression?.treeObject(),
          ],
        }
      : {
          name: "UseRef",
          children: [this.identifier.treeObject()],
        };
  }

  resolve(): string {
    return "";
  }
}
