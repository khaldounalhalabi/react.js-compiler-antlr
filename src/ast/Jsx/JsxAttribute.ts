import { JsxAttributeName } from "./JsxAttributeName.ts";
import { JsxAttributeValue } from "./JsxAttributeValue.ts";
import { Jsx } from "../abstracts/Jsx.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class JsxAttribute extends Jsx {
  public name: JsxAttributeName;

  public value: JsxAttributeValue;

  constructor(name: JsxAttributeName, value: JsxAttributeValue) {
    super();
    this.name = name;
    this.value = value;
  }

  public toString() {
    return `${this.name.toString()} = ${this.value.toString()}`;
  }

  public astNode(): string {
    return `JsxAttribute -> ${this.name.astNode()} JsxAttribute -> AssignSymbol JsxAttribute -> ${this.value.astNode()}`;
  }

  treeObject(): TreeNode {
    return {
      name: "Jsx Attribute",
      children: [
        this.name.treeObject(),
        { name: "=" },
        this.value.treeObject(),
      ],
    };
  }
}
