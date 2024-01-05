import { JsxElementFull } from "./JsxElementFull.ts";
import { SelfClosingJsxElement } from "./SelfClosingJsxElement.ts";
import { Jsx } from "../abstracts/Jsx.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class JsxElement extends Jsx {
  public element: JsxElementFull | SelfClosingJsxElement;

  constructor(element: JsxElementFull | SelfClosingJsxElement) {
    super();
    this.element = element;
  }

  public toString() {
    return this.element.toString();
  }

  public astNode(): string {
    return `JsxElement -> ${this.element.astNode()}`;
  }

  treeObject(): TreeNode {
    return {
      name: "Jsx Element",
      children: [this.element.treeObject()],
    };
  }
}
