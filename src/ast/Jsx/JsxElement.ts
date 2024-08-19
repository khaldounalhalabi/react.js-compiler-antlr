import { JsxElementFull } from "./JsxElementFull.ts";
import { SelfClosingJsxElement } from "./SelfClosingJsxElement.ts";
import { Jsx } from "../abstracts/Jsx.ts";
import { TreeNode } from "../../Types/TreeNode.ts";
import { SelfClosingComponent } from "./SelfClosingComponent.ts";
import { JsxComponentFull } from "./JsxComponentFull.ts";

export class JsxElement extends Jsx {
  public element:
    | JsxElementFull
    | SelfClosingJsxElement
    | SelfClosingComponent
    | JsxComponentFull;

  constructor(
    element:
      | JsxElementFull
      | SelfClosingJsxElement
      | SelfClosingComponent
      | JsxComponentFull,
  ) {
    super();
    this.element = element;
  }

  public toString() {
    return this.element.toString();
  }

  treeObject(): TreeNode {
    return {
      name: "Jsx Element",
      children: [this.element.treeObject()],
    };
  }

  resolve(): string {
    return this.element.resolve();
  }
}
