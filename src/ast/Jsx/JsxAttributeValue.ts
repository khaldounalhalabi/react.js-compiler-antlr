import { Expression } from "../abstracts/Expression.ts";
import { String } from "../Expressions/String.ts";
import { Jsx } from "../abstracts/Jsx.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class JsxAttributeValue extends Jsx {
  public value: String | Expression;

  constructor(value: Expression | String) {
    super();
    this.value = value;
  }

  public toString(): string {
    return this.value.toString();
  }

  public astNode(): string {
    if (this.value instanceof String)
      return `JsxAttributeValue -> ${this.value}`;
    else {
      return `JsxAttributeValue -> ${this.value.astNode()}`;
    }
  }

  treeObject(): TreeNode {
    if (this.value instanceof Expression) {
      return {
        name: "Jsx Attribute Value",
        // children: [this.value.treeObject()],
      };
    } else {
      return {
        name: "Jsx Attribute Value",
        // children: [{ name: this.value }],
      };
    }
  }
}
