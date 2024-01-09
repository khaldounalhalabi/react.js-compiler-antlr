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

  astNode(): string {
    return "";
  }

  toString(): string {
    return "";
  }

  treeObject(): TreeNode {
    return {
      name: "Component Prop",
      children: [this.identifier.treeObject(), this.value.treeObject()],
    };
  }
}
