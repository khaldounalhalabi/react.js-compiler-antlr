import { JsxAttributeName } from "./JsxAttributeName.ts";
import { JsxAttributeValue } from "./JsxAttributeValue.ts";
import { Jsx } from "../abstracts/Jsx.ts";
import { TreeNode } from "../../Types/TreeNode.ts";
import { RefHandler } from "../../libs/RefHandler.ts";

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

  resolve(): string {
    const attributeName = this.name.resolve();
    switch (attributeName) {
      case "onClick":
        return `onclick="(${this.value.resolve()})(event)"`;
      case "src":
        return `src=${this.value.resolve()}`;
      case "ref":
        let id = Date.now() * Math.random();
        RefHandler.add(id as number);
        return `id=${id}`;
      case "width":
        return `width=${this.value.resolve()}`;
      case "height":
        return `width=${this.value.resolve()}`;
      case "className":
        return `class=${this.value.resolve()}`;
      case "href":
        return `href=${this.value.resolve()}`;
      default:
        return "";
    }
  }
}
