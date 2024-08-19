import { JsxTagName } from "./JsxTagName.ts";
import { JsxAttribute } from "./JsxAttribute.ts";
import { Jsx } from "../abstracts/Jsx.ts";
import { TreeNode } from "../../Types/TreeNode.ts";

export class SelfClosingJsxElement extends Jsx {
  public tagName: JsxTagName;

  public jsxAttributes?: JsxAttribute[];

  constructor(tagName: JsxTagName, attributes?: JsxAttribute[]) {
    super();
    this.tagName = tagName;

    if (attributes) {
      this.jsxAttributes = attributes;
    }
  }

  public toString(): string {
    const attributes =
      this.jsxAttributes?.map((attr) => attr.toString()).join(" ") ?? "";

    return `<${this.tagName.toString()} ${attributes}/>`;
  }

  treeObject(): TreeNode {
    let attrs: TreeNode[] = [];
    this.jsxAttributes?.forEach((att) => {
      attrs.push(att.treeObject());
    });

    return this.jsxAttributes
      ? {
          name: "Self Closing Jsx Element",
          children: [...attrs],
        }
      : {
          name: "Self Closing Jsx Element",
        };
  }
  resolve(): string {
    if (this.tagName.resolve() != "img") {
      return `<${this.tagName.resolve()} ${this.jsxAttributes
          ?.map((attr) => attr.resolve())
          .join(" ")}></${this.tagName.resolve()}>`;
    } else {
      return `<${this.tagName.resolve()} ${this.jsxAttributes
          ?.map((attr) => attr.resolve())
          .join(" ")}/>`;
    }
  }
}
