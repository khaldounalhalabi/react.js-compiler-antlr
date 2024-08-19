import { JsxElement } from "./JsxElement.ts";
import { Expression } from "../abstracts/Expression.ts";
import { Jsx } from "../abstracts/Jsx.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class JsxElementContent extends Jsx {
  public content?: JsxElement | Expression;

  constructor(content?: JsxElement | Expression) {
    super();
    this.content = content;
  }

  public toString(): string {
    return this.content?.toString() ?? "";
  }

  treeObject(): TreeNode {
    if (this.content) {
      return {
        name: "Jsx Element Content",
        children: [this.content.treeObject()],
      };
    } else {
      return {
        name: "Jsx Element Content",
      };
    }
  }

  resolve(): string {
    return this.content?.resolve() ?? "";
  }
}
