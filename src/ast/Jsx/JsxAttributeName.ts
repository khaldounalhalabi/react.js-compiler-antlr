import { Jsx } from "../abstracts/Jsx.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class JsxAttributeName extends Jsx {
  public name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  public toString() {
    return this.name;
  }

  treeObject(): TreeNode {
    return {
      name: "Jsx Attribute Name",
      children: [{ name: this.name }],
    };
  }

  resolve(): string {
    return this.name;
  }
}
