import { Expression } from "../abstracts/Expression.ts";
import { String as AntlrString } from "../Expressions/String.ts";
import { Jsx } from "../abstracts/Jsx.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class JsxAttributeValue extends Jsx {
  public value: AntlrString | Expression;

  constructor(value: Expression | AntlrString) {
    super();
    this.value = value;
  }

  public toString(): string {
    return this.value.toString();
  }

  treeObject(): TreeNode {
    return {
      name: "Jsx Attribute Value",
      children: [this.value.treeObject()],
    };
  }

  resolve(): string {
    return this.value.resolve();
  }
}
