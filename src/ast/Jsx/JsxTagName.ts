import { Jsx } from "../abstracts/Jsx.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class JsxTagName extends Jsx {
  public name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  public toString() {
    return this.name;
  }

  public astNode(): string {
    return `JsxTagName -> ${this.name}`;
  }

  treeObject(): TreeNode {
    return { name: "Jsx Tag Name", children: [{ name: this.name }] };
  }
}
