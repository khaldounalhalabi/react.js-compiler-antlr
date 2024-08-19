import { Jsx } from "../abstracts/Jsx.ts";
import { Identifier } from "../Expressions/Identifier.ts";
import { JsxAttributeValue } from "./JsxAttributeValue.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class ComponentProps extends Jsx {
  public identifier: Identifier;
  public value: JsxAttributeValue;

  constructor(identifier: Identifier, value: JsxAttributeValue) {
    super();
    this.identifier = identifier;
    this.value = value;
  }

  toString(): string {
    return this.identifier.toString() + "=" + `{${this.value.toString()}}`;
  }

  treeObject(): TreeNode {
    return {
      name: "Component Prop",
      children: [this.identifier.treeObject(), this.value.treeObject()],
    };
  }

  resolve(): string {
    return this.value.resolve();
  }
}
