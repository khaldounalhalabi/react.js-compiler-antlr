import { Identifier } from "../Expressions/Identifier.ts";
import { Expression } from "../abstracts/Expression.ts";
import { TreeNode } from "../../Types/TreeNode.ts";
import { RefHandler } from "../../libs/RefHandler.ts";
import { AbstractStatement } from "../abstracts/AbstractStatement.ts";

export class UseRef extends AbstractStatement {
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
    return `setRef('${this.identifier.resolve()}',document.getElementById('ref_id${RefHandler.pop(
      this.identifier.resolve(),
    )?.value}_ref')?.outerHTML ?? null) \n
    const ${this.identifier.resolve()} = getState('${this.identifier.resolve()}')${
      this.expression ? `?? ${this.expression.resolve()}` : "undefined"
    };`;
  }
}
